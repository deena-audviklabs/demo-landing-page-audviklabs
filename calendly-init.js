/**
 * Global Calendly Configuration for Audvik Labs
 */

// CHANGE: Use the base URL to show the event selection screen first
const CALENDLY_URL = 'https://calendly.com/audviklabs'; 

function openCalendly(e) {
    if (e && e.preventDefault) e.preventDefault();

    if (typeof Calendly !== 'undefined') {
        Calendly.initPopupWidget({
            url: CALENDLY_URL,
            /* CENTRALIZED STYLING */
            pageSettings: {
                backgroundColor: '0a0a0f', 
                hideEventTypeDetails: false, // Ensure this is false to show event info
                hideLandingPageDetails: false, // Ensure this is false to show your profile info
                primaryColor: '7e57c2',    
                textColor: 'ffffff'       
            }
        });
    } else {
        console.error("Calendly script not loaded yet.");
    }
    return false;
}