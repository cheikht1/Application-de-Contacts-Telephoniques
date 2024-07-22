$(document).on('pagecreate', '#home', function() {
    // Charger les contacts depuis LocalStorage
    function loadContacts() {
        let storedContacts = localStorage.getItem('contacts');
        if (storedContacts) {
            return JSON.parse(storedContacts);
        } else {
            return [];
        }
    }

    // Sauvegarder les contacts dans LocalStorage
    function saveContacts() {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // Créer une image avec les initiales
    function getInitialsImage(firstName, lastName) {
        let initials = (firstName[0] + lastName[0]).toUpperCase();
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='50'%3E%3Crect width='100%' height='100%' fill='%23cccccc'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-size='20' font-weight='bold'%3E${initials}%3C/text%3E%3C/svg%3E`;
    }

    let contacts = loadContacts();

    // Afficher les contacts dans la liste
    function displayContacts() {
        let contactList = $('#contactList');
        contactList.empty();
        contacts.forEach(contact => {
            let imageUrl = contact.image ? contact.image : getInitialsImage(contact.firstName, contact.lastName);
            contactList.append(`
                <li>
                    <a href="#contactDetails" class="contact-item" data-index="${contacts.indexOf(contact)}">
                        <div class="contact-image" style="background-image: url('${imageUrl}');">
                            ${!contact.image ? `<img src="${imageUrl}" alt="Initials">` : ''}
                        </div>
                        <div>
                            <h2>${contact.firstName} ${contact.lastName}</h2>
                            <p>${contact.phoneNumber}</p>
                        </div>
                    </a>
                </li>
            `);
        });
        contactList.listview('refresh');
    }

    // Gérer le clic sur un élément de contact
    $(document).on('click', '.contact-item', function() {
        let index = $(this).data('index');
        let contact = contacts[index];
        $('#contactInfo').html(`
            <img src="${contact.image ? contact.image : getInitialsImage(contact.firstName, contact.lastName)}" alt="${contact.firstName} ${contact.lastName}">
            <h2>${contact.firstName} ${contact.lastName}</h2>
            <p>Phone: ${contact.phoneNumber}</p>
        `);
        $('#deleteContact').data('index', index);  // Stocker l'index pour suppression
    });

    // Gérer le clic sur le bouton de suppression
    $('#deleteContact').on('click', function() {
        let index = $(this).data('index');
        contacts.splice(index, 1);
        saveContacts();  // Sauvegarder les changements dans LocalStorage
        displayContacts();
        $.mobile.changePage('#home');
    });

    // Fonctionnalité de recherche
    $('#searchInput').on('input', function() {
        let searchTerm = $(this).val().toLowerCase();
        $('#contactList li').each(function() {
            let contactName = $(this).find('h2').text().toLowerCase();
            $(this).toggle(contactName.indexOf(searchTerm) > -1);
        });
    });

    // Validation du formulaire
    function validateForm(firstName, lastName, phoneNumber) {
        let isValid = true;
        $('#firstNameError').text('');
        $('#lastNameError').text('');
        $('#phoneNumberError').text('');

        if (!firstName) {
            $('#firstNameError').text('First name is required.');
            isValid = false;
        }
        if (!lastName) {
            $('#lastNameError').text('Last name is required.');
            isValid = false;
        }
        if (!phoneNumber) {
            $('#phoneNumberError').text('Phone number is required.');
            isValid = false;
        } else if (!/^\d{9}$/.test(phoneNumber)) { // Validation pour 9 chiffres
            $('#phoneNumberError').text('Phone number must be 9 digits.');
            isValid = false;
        }

        return isValid;
    }

    // Soumission du formulaire pour ajouter un nouveau contact
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let phoneNumber = $('#phoneNumber').val();
        let countryCode = $('#countryCode').val(); // Récupérer l'indicatif téléphonique

        if (validateForm(firstName, lastName, phoneNumber)) {
            let newContact = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: countryCode + phoneNumber, // Préfixer le numéro avec l'indicatif
                image: '' // Vide par défaut, utilisera l'image avec les initiales
            };
            contacts.push(newContact);
            saveContacts();  // Sauvegarder le nouveau contact dans LocalStorage
            displayContacts();
            $('#contactForm')[0].reset();
            $.mobile.changePage('#home');
        }
    });

    // Affichage initial des contacts
    displayContacts();
});
