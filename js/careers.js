class CareerExplorer {
    constructor() {
        this.activeFilters = {
            industries: new Set(),
            skills: new Set(),
            education: new Set()
        };
        
        this.initializeFilters();
        this.initializeCareerPaths();
        this.initializeEventListeners();
        this.checkQuizResults();
    }

    initializeFilters() {
        // Initialize industry filters
        const industryFilters = document.getElementById('industry-filters');
        filters.industries.forEach(industry => {
            industryFilters.appendChild(this.createFilterOption('industries', industry));
        });

        // Initialize skill filters
        const skillFilters = document.getElementById('skill-filters');
        filters.skills.forEach(skill => {
            skillFilters.appendChild(this.createFilterOption('skills', skill));
        });

        // Initialize education filters
        const educationFilters = document.getElementById('education-filters');
        filters.education.forEach(level => {
            educationFilters.appendChild(this.createFilterOption('education', level));
        });
    }

    createFilterOption(type, value) {
        const div = document.createElement('div');
        div.className = 'filter-option';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `${type}-${value.toLowerCase().replace(/\s+/g, '-')}`;
        input.addEventListener('change', () => this.handleFilterChange(type, value));

        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = value;

        div.appendChild(input);
        div.appendChild(label);
        return div;
    }

    initializeCareerPaths() {
        const container = document.getElementById('career-paths-container');
        container.innerHTML = '';

        Object.values(careerPathways).forEach(pathway => {
            pathway.roles.forEach(role => {
                const card = this.createCareerCard(pathway, role);
                container.appendChild(card);
            });
        });
    }

    createCareerCard(pathway, role) {
        const card = document.createElement('div');
        card.className = 'career-card';
        card.innerHTML = `
            <h3>${role.title}</h3>
            <p>${pathway.description}</p>
            <div class="career-info">
                <p><strong>Salary Range:</strong> ${role.salary}</p>
                <p><strong>Growth:</strong> ${role.growth}</p>
            </div>
            <div class="career-tags">
                ${role.skills.map(skill => `
                    <span class="career-tag">${skill}</span>
                `).join('')}
            </div>
        `;

        card.addEventListener('click', () => this.showCareerDetails(pathway, role));
        return card;
    }

    showCareerDetails(pathway, role) {
        const modal = document.getElementById('career-detail-modal');
        const modalBody = modal.querySelector('.modal-body');

        modalBody.innerHTML = `
            <h2>${role.title}</h2>
            <p class="pathway-description">${pathway.description}</p>
            
            <div class="career-details">
                <h3>Overview</h3>
                <p><strong>Salary Range:</strong> ${role.salary}</p>
                <p><strong>Growth Outlook:</strong> ${role.growth}</p>
                <p><strong>Required Education:</strong> ${role.education}</p>
                
                <h3>Key Skills</h3>
                <div class="career-tags">
                    ${role.skills.map(skill => `
                        <span class="career-tag">${skill}</span>
                    `).join('')}
                </div>
                
                <h3>Industries</h3>
                <div class="career-tags">
                    ${role.industries.map(industry => `
                        <span class="career-tag">${industry}</span>
                    `).join('')}
                </div>
            </div>

            <div class="career-roadmap">
                <h3>Career Roadmap</h3>
                ${role.roadmap.map((step, index) => `
                    <div class="roadmap-step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h4>${step.title}</h4>
                            <p>${step.description}</p>
                            <p><strong>Recommended Resources:</strong> ${step.resources.join(', ')}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        modal.classList.add('active');
    }

    handleFilterChange(type, value) {
        if (this.activeFilters[type].has(value)) {
            this.activeFilters[type].delete(value);
        } else {
            this.activeFilters[type].add(value);
        }
        this.filterCareerPaths();
    }

    filterCareerPaths() {
        const cards = document.querySelectorAll('.career-card');
        
        cards.forEach(card => {
            const role = this.getRoleFromCard(card);
            const isVisible = this.matchesFilters(role);
            card.style.display = isVisible ? 'block' : 'none';
        });
    }

    getRoleFromCard(card) {
        const title = card.querySelector('h3').textContent;
        let role;
        
        Object.values(careerPathways).some(pathway => {
            role = pathway.roles.find(r => r.title === title);
            return role;
        });

        return role;
    }

    matchesFilters(role) {
        // If no filters are active, show all cards
        if (!Object.values(this.activeFilters).some(filter => filter.size > 0)) {
            return true;
        }

        // Check if role matches all active filters
        const matchesIndustries = this.activeFilters.industries.size === 0 || 
            role.industries.some(industry => this.activeFilters.industries.has(industry));

        const matchesSkills = this.activeFilters.skills.size === 0 ||
            role.skills.some(skill => this.activeFilters.skills.has(skill));

        const matchesEducation = this.activeFilters.education.size === 0 ||
            this.activeFilters.education.has(role.education);

        return matchesIndustries && matchesSkills && matchesEducation;
    }

    initializeEventListeners() {
        // Close modal when clicking outside or on close button
        const modal = document.getElementById('career-detail-modal');
        const closeBtn = modal.querySelector('.close-modal');

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // View toggle buttons
        const toggleBtns = document.querySelectorAll('.toggle-btn');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                toggleBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const view = btn.dataset.view;
                const container = document.getElementById('career-paths-container');
                container.className = view === 'grid' ? 'career-grid' : 'career-list';
            });
        });
    }

    checkQuizResults() {
        // Check if there are quiz results in localStorage
        const quizResults = localStorage.getItem('quizResults');
        if (quizResults) {
            const results = JSON.parse(quizResults);
            // Highlight matching career paths based on quiz results
            this.highlightRecommendedCareers(results);
        }
    }

    highlightRecommendedCareers(results) {
        const cards = document.querySelectorAll('.career-card');
        const maxScore = Math.max(...Object.values(results));

        cards.forEach(card => {
            const role = this.getRoleFromCard(card);
            const matchScore = this.calculateMatchScore(role, results);
            
            if (matchScore > maxScore * 0.7) { // 70% match threshold
                card.classList.add('recommended');
                const badge = document.createElement('div');
                badge.className = 'recommendation-badge';
                badge.textContent = 'Recommended';
                card.insertBefore(badge, card.firstChild);
            }
        });
    }

    calculateMatchScore(role, results) {
        let score = 0;
        role.skills.forEach(skill => {
            const category = Object.keys(careerPathways).find(cat => 
                careerPathways[cat].skills.includes(skill)
            );
            if (category && results[category]) {
                score += results[category];
            }
        });
        return score;
    }
}

// Initialize the career explorer when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CareerExplorer();
});
