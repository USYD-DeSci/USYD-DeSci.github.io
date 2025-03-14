// This file contains the Alpine.js functionality for the website

// Function to initialize the typing effect in the hero section
function initTypingEffect() {
    return {
        currentPhrase: 0,
        phrases: [
            'Blockchain Innovation',
            'Research & Development',
            'Building Web3 Future',
            'Decentralized Science'
        ],
        currentText: '',
        currentWords: [],
        isDeleting: false,
        typeSpeed: 100,
        deleteSpeed: 200,
        pauseDelay: 4000,
        init() {
            this.typeNextPhrase();
        },
        typeNextPhrase() {
            const current = this.phrases[this.currentPhrase];

            if (!this.isDeleting) {
                // Typing
                this.currentText = current.substring(0, this.currentText.length + 1);
                if (this.currentText === current) {
                    // Complete word typed
                    setTimeout(() => {
                        this.isDeleting = true;
                        this.currentWords = this.currentText.split(' ');
                        this.typeNextPhrase();
                    }, this.pauseDelay);
                    return;
                }
            } else {
                // Deleting word by word
                if (this.currentWords.length > 0) {
                    this.currentWords.pop();
                    this.currentText = this.currentWords.join(' ');
                } else {
                    this.isDeleting = false;
                    this.currentPhrase = (this.currentPhrase + 1) % this.phrases.length;
                }
            }

            const delta = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
            setTimeout(() => this.typeNextPhrase(), delta);
        }
    };
}

// Function to initialize the projects section with filtering
function initProjectsSection() {
    return {
        projects: [],
        selectedTags: [],
        allTags: [],
        init() {
            this.projects = projectData.projects;
            this.allTags = [...new Set(projectData.projects.flatMap(p => p.tags))].sort();
        },
        isProjectVisible(project) {
            if (this.selectedTags.length === 0) return true;
            return this.selectedTags.every(tag => project.tags.includes(tag));
        }
    };
} 