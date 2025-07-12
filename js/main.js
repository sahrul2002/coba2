/**
 * Main application initialization
 */

// import { dataService } from './data.js';
// import { uiService } from './ui.js';
// import { expertService } from './expert.js';
// import { diagnosaService } from './diagnosa.js';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('Initializing application...');
    
    // Show loading indicator
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loading-indicator';
    loadingIndicator.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(248, 249, 250, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            backdrop-filter: blur(10px);
        ">
            <div style="
                text-align: center;
                color: #212529;
            ">
                <div style="
                    width: 50px;
                    height: 50px;
                    border: 4px solid #dee2e6;
                    border-top: 4px solid #D50000;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 20px;
                "></div>
                <p style="font-size: 16px; font-weight: 500;">Memuat aplikasi...</p>
            </div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    document.body.appendChild(loadingIndicator);
    
    try {
        // Initialize data service first (this will setup database connection)
        await window.dataService.initialize();
        console.log('Data service ready');
        
        // Initialize UI service
        window.uiService.initialize();
        console.log('UI service ready');
        
        // Initialize expert service
        window.expertService.initialize();
        console.log('Expert service ready');
        
        // Initialize diagnosa service
        window.diagnosaService.initialize();
        console.log('Diagnosa service ready');
        
        console.log('Application initialized successfully');
        
        // Hide loading indicator
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.parentNode.removeChild(loadingIndicator);
        }
        
    } catch (error) {
        console.error('Failed to initialize application:', error);
        
        // Hide loading indicator
        if (loadingIndicator && loadingIndicator.parentNode) {
            loadingIndicator.parentNode.removeChild(loadingIndicator);
        }
        
        alert('Gagal menginisialisasi aplikasi. Silakan refresh halaman.');
    }
});