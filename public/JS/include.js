async function includeHTML() {
    const includeElements = document.querySelectorAll('[data-include]');

    for (const element of includeElements) {
        const file = element.getAttribute('data-include');
        const headerTitleOverride = element.dataset.headerTitle;
        const aboutTitleOverride = element.dataset.aboutTitle;
        const aboutContentOverride = element.dataset.aboutContent;
        const contactContentOverride1 = element.dataset.contactContent1;
        const contactContentOverride2 = element.dataset.contactContent2;
        const contactContentOverride3 = element.dataset.contactContent3;
        const headerTitle = element.dataset.headerTitle;
        const imagesData = element.dataset.images;
        const offeringsTitle = element.dataset.offeringsTitle;
        const offeringsData = element.dataset.offerings;
        const navButtonsData = element.dataset.navButtons;
        const eventsData = element.dataset.events;

        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`Failed to fetch ${file}: ${response.status} ${response.statusText}`);
            }
            let html = await response.text();

            // Override logic for header title
            if (headerTitleOverride && file.includes('header.html')) {
                html = html.replace('{{headerTitle}}', headerTitleOverride);
            }

            // Override logic for about title
            if (aboutTitleOverride && file.includes('about.html')) {
                html = html.replace('{{aboutTitle}}', aboutTitleOverride);
            }

            // Override logic for about content
            if (aboutContentOverride && file.includes('about.html')) {
                html = html.replace('{{aboutContent}}', aboutContentOverride);
            }

            // Override logic for header title with images
            if (headerTitle && file.includes('header.html')) {
                html = html.replace('{{headerTitle}}', headerTitle);
            }

            // Override logic for images in header
            if (imagesData && file.includes('header.html')) {
                let images = JSON.parse(imagesData);
                let imagePlaceholders = '';
                images.forEach(image => {
                    imagePlaceholders += `<img src="${image.src}" alt="${image.alt}">`;
                });
                html = html.replace('{{imagePlaceholders}}', imagePlaceholders);
            }

            // Override logic for navigation buttons
            if (navButtonsData && file.includes('nav.html')) {
                let navButtons = JSON.parse(navButtonsData);
                let navButtonsHTML = '';
                navButtons.forEach(button => {
                    navButtonsHTML += `<a href="${button.link}">${button.text}</a>`;
                });
                html = html.replace('{{navButtons}}', navButtonsHTML);
            }

            // Override logic for offerings title
            if (offeringsTitle && file.includes('offerings.html')) {
                html = html.replace('{{offeringsTitle}}', offeringsTitle);
            }

            // Override logic for offerings content
            if (offeringsData && file.includes('offerings.html')) {
                let offerings = JSON.parse(offeringsData);
                let offeringsContent = '';
                offerings.forEach(offering => {
                    let imagePlaceholders = '';
                    offering.images.forEach(image => {
                        imagePlaceholders += `<img src="${image.src}" alt="${image.alt}">`;
                    });
                    offeringsContent += `
                        <div class="offering">
                            <h3>${offering.title}</h3>
                            <div class="offering-slider-container">
                                <div class="offering-slider scrollable">
                                    ${imagePlaceholders}
                                </div>
                            </div>
                            <p>${offering.description}</p>
                        </div>
                    `;
                });
                html = html.replace('{{offeringsContent}}', offeringsContent);
            }

            // Override logic for contact content 1
            if (contactContentOverride1 && file.includes('contact.html')) {
                html = html.replace('{{contactContent1}}', contactContentOverride1);
            }

            // Override logic for contact content 2
            if (contactContentOverride2 && file.includes('contact.html')) {
                html = html.replace('{{contactContent2}}', contactContentOverride2);
            }

            // Override logic for contact content 3
            if (contactContentOverride3 && file.includes('contact.html')) {
                html = html.replace('{{contactContent3}}', contactContentOverride3);
            }

            // Override logic for events content
            if (eventsData && file.includes('events.html')) {
                let events = JSON.parse(eventsData);
                let eventsContent = events.length === 0 ? '<p>No upcoming events.</p>' : events.map(event => `
                    <div class="event">
                        <img src="${event.image}" alt="${event.title}" class="event-image">
                        <h3>${event.title}</h3>
                        <p>${event.description}</p>
                    </div>
                `).join('');
                html = html.replace('{{eventsContent}}', eventsContent);
            }

            element.innerHTML = html;
        } catch (error) {
            console.error('Error including HTML:', error);
            element.innerHTML = '<p>Error loading content.</p>';
        }
    }

    if (window.sweetDiscoveryInit) {
        window.sweetDiscoveryInit();
    }
}

document.addEventListener('DOMContentLoaded', includeHTML);