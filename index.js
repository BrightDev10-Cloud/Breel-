// ===================================
// SAMPLE DATA
// ===================================

const subjectsData = [
    {
        id: 1,
        code: 'CS 101',
        name: 'Introduction to Programming',
        credits: 3,
        midterm: 88,
        final: 92,
        grade: 'A',
        status: 'completed',
        progress: 100,
        icon: 'ph-code',
        color: '#7c3aed',
        bgColor: '#e8e5ff',
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop'
    },
    {
        id: 2,
        code: 'MATH 201',
        name: 'Calculus II',
        credits: 4,
        midterm: 85,
        final: 90,
        grade: 'A',
        status: 'completed',
        progress: 100,
        icon: 'ph-calculator',
        color: '#ff6636',
        bgColor: '#fff4ed',
        image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=300&fit=crop'
    },
    {
        id: 3,
        code: 'PHYS 150',
        name: 'Physics for Engineers',
        credits: 4,
        midterm: 82,
        final: 87,
        grade: 'B',
        status: 'completed',
        progress: 100,
        icon: 'ph-atom',
        color: '#10b981',
        bgColor: '#d1fae5',
        image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=400&h=300&fit=crop'
    },
    {
        id: 4,
        code: 'ENG 102',
        name: 'Advanced English Composition',
        credits: 3,
        midterm: 90,
        final: 94,
        grade: 'A',
        status: 'completed',
        progress: 100,
        icon: 'ph-book-open',
        color: '#f97316',
        bgColor: '#fed7aa',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop'
    },
    {
        id: 5,
        code: 'CS 250',
        name: 'Data Structures & Algorithms',
        credits: 4,
        midterm: 87,
        final: 0,
        grade: '-',
        status: 'in-progress',
        progress: 65,
        icon: 'ph-tree-structure',
        color: '#7c3aed',
        bgColor: '#e8e5ff',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop'
    },
    {
        id: 6,
        code: 'CHEM 101',
        name: 'General Chemistry',
        credits: 4,
        midterm: 79,
        final: 0,
        grade: '-',
        status: 'in-progress',
        progress: 45,
        icon: 'ph-flask',
        color: '#10b981',
        bgColor: '#d1fae5',
        image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=400&h=300&fit=crop'
    },
    {
        id: 7,
        code: 'HIST 201',
        name: 'World History II',
        credits: 3,
        midterm: 88,
        final: 91,
        grade: 'A',
        status: 'completed',
        progress: 100,
        icon: 'ph-scroll',
        color: '#f97316',
        bgColor: '#fed7aa',
        image: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&h=300&fit=crop'
    },
    {
        id: 8,
        code: 'BIO 150',
        name: 'Introduction to Biology',
        credits: 4,
        midterm: 84,
        final: 88,
        grade: 'B',
        status: 'completed',
        progress: 100,
        icon: 'ph-dna',
        color: '#10b981',
        bgColor: '#d1fae5',
        image: 'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?w=400&h=300&fit=crop'
    }
];

const performanceData = [
    { subject: 'Advanced English Composition', grade: 'A', score: 94, color: '#f97316' },
    { subject: 'Introduction to Programming', grade: 'A', score: 92, color: '#7c3aed' },
    { subject: 'World History II', grade: 'A', score: 91, color: '#ff6636' },
    { subject: 'Calculus II', grade: 'A', score: 90, color: '#10b981' },
    { subject: 'Introduction to Biology', grade: 'B', score: 88, color: '#22c55e' }
];

// ===================================
// THEME MANAGEMENT
// ===================================

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('themeToggle');
        this.body = document.body;
        this.init();
    }

    init() {
        if (!this.themeToggle) return;
        
        // Load saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme, false);

        // Add event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        const currentTheme = this.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme, true);
    }

    setTheme(theme, animate = true) {
        const icon = this.themeToggle.querySelector('i');
        
        if (theme === 'dark') {
            this.body.classList.add('dark-theme');
            icon.className = 'ph ph-sun';
        } else {
            this.body.classList.remove('dark-theme');
            icon.className = 'ph ph-moon';
        }

        // Save to localStorage
        localStorage.setItem('theme', theme);

        // Optional animation
        if (animate) {
            this.themeToggle.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.themeToggle.style.transform = '';
            }, 300);
        }
    }
}

// ===================================
// SIDEBAR MANAGEMENT
// ===================================

class SidebarManager {
    constructor() {
        this.sidebar = document.getElementById('sidebar');
        this.menuToggle = document.getElementById('menuToggle');
        this.sidebarClose = document.getElementById('sidebarClose');
        this.init();
    }

    init() {
        if (!this.sidebar || !this.menuToggle || !this.sidebarClose) return;

        // Toggle sidebar
        this.menuToggle.addEventListener('click', () => {
            this.sidebar.classList.add('active');
        });

        // Close sidebar
        this.sidebarClose.addEventListener('click', () => {
            this.sidebar.classList.remove('active');
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (!this.sidebar.contains(e.target) && 
                !this.menuToggle.contains(e.target) && 
                this.sidebar.classList.contains('active')) {
                this.sidebar.classList.remove('active');
            }
        });

        // Sidebar navigation
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                sidebarLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                this.sidebar.classList.remove('active');
            });
        });
    }
}

// ===================================
// TAB NAVIGATION
// ===================================

class TabNavigation {
    constructor() {
        this.tabLinks = document.querySelectorAll('.tab-link');
        this.init();
    }

    init() {
        if (this.tabLinks.length === 0) return;

        this.tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.tabLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // You can add content switching logic here
                const contentId = link.dataset.content;
                console.log('Switching to:', contentId);
            });
        });
    }
}

// ===================================
// DATA RENDERING
// ===================================

class DataRenderer {
    constructor() {
        this.subjectsGrid = document.getElementById('subjectsGrid');
        this.gradesTableBody = document.getElementById('gradesTableBody');
        this.performanceChart = document.getElementById('performanceChart');
    }

    renderAll() {
        this.renderSubjects();
        this.renderGradesTable();
        this.renderPerformanceChart();
        this.animateStats();
    }

    renderSubjects() {
        if (!this.subjectsGrid) return;

        // Show first 4 subjects in grid
        const displaySubjects = subjectsData.slice(0, 4);
        
        this.subjectsGrid.innerHTML = displaySubjects.map(subject => `
            <div class="subject-card">
                <img src="${subject.image}" alt="${subject.name}" class="subject-image">
                <div class="subject-content">
                    <div class="subject-meta">
                        <span class="subject-code">${subject.code}</span>
                        <span class="subject-credits">${subject.credits} Credits</span>
                    </div>
                    <h3 class="subject-name">${subject.name}</h3>
                    <div class="subject-footer">
                        ${subject.status === 'completed' 
                            ? `<div class="subject-progress-text">
                                <i class="ph ph-check"></i> ${subject.progress}% Completed
                               </div>
                               <span class="subject-grade">${subject.grade}</span>`
                            : `<div class="subject-progress-text">${subject.progress}% Complete</div>
                               <button class="subject-view-btn">View Details</button>`
                        }
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderGradesTable() {
        if (!this.gradesTableBody) return;

        this.gradesTableBody.innerHTML = subjectsData.map(subject => `
            <tr>
                <td>
                    <div class="subject-cell">
                        <div class="subject-icon-small" style="background-color: ${subject.bgColor}; color: ${subject.color};">
                            <i class="${subject.icon}"></i>
                        </div>
                        <div>
                            <div style="font-weight: 600;">${subject.name}</div>
                            <div style="font-size: 0.875rem; color: var(--text-secondary);">${subject.code}</div>
                        </div>
                    </div>
                </td>
                <td>${subject.credits}</td>
                <td>${subject.midterm > 0 ? subject.midterm + '%' : '-'}</td>
                <td>${subject.final > 0 ? subject.final + '%' : '-'}</td>
                <td>
                    ${subject.grade !== '-' 
                        ? `<span class="grade-badge grade-${subject.grade.toLowerCase()}">${subject.grade}</span>`
                        : '<span class="grade-badge" style="background-color: var(--bg-primary); color: var(--text-secondary);">-</span>'
                    }
                </td>
                <td>
                    <span class="status-badge status-${subject.status}">
                        <i class="ph ${subject.status === 'completed' ? 'ph-check-circle' : 'ph-clock'}"></i>
                        ${this.capitalize(subject.status === 'in-progress' ? 'In Progress' : subject.status)}
                    </span>
                </td>
            </tr>
        `).join('');
    }

    renderPerformanceChart() {
        if (!this.performanceChart) return;

        this.performanceChart.innerHTML = performanceData.map((item, index) => `
            <div class="chart-item" style="animation-delay: ${index * 0.1}s;">
                <div class="chart-header">
                    <span class="chart-subject">${item.subject}</span>
                    <span class="chart-grade">${item.grade} (${item.score}%)</span>
                </div>
                <div class="chart-bar-container">
                    <div class="chart-bar" style="width: ${item.score}%; background: linear-gradient(90deg, ${item.color} 0%, ${item.color}dd 100%);"></div>
                </div>
            </div>
        `).join('');

        // Animate bars after render
        setTimeout(() => {
            document.querySelectorAll('.chart-bar').forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }, 100);
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const isDecimal = finalValue.includes('.');
            const numericValue = parseFloat(finalValue);
            
            if (!isNaN(numericValue)) {
                this.animateValue(stat, 0, numericValue, 1500, isDecimal);
            }
        });
    }

    animateValue(element, start, end, duration, isDecimal) {
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = start + (end - start) * easeOutQuart;
            
            element.textContent = isDecimal 
                ? current.toFixed(1) 
                : Math.floor(current).toString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================

class SearchManager {
    constructor() {
        this.searchInput = document.querySelector('.search-bar input');
        this.init();
    }

    init() {
        if (!this.searchInput) return;

        this.searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
    }

    handleSearch(query) {
        console.log('Searching for:', query);
        
        if (!query.trim()) return;
        
        // Filter subjects
        const filtered = subjectsData.filter(subject => 
            subject.name.toLowerCase().includes(query.toLowerCase()) ||
            subject.code.toLowerCase().includes(query.toLowerCase())
        );
        
        console.log('Found:', filtered);
        
        // You can update the UI here to show filtered results
    }
}

// ===================================
// SCROLL NAVIGATION
// ===================================

class ScrollNavigation {
    constructor() {
        this.navArrows = document.querySelectorAll('.nav-arrow');
        this.subjectsGrid = document.getElementById('subjectsGrid');
        this.init();
    }

    init() {
        if (this.navArrows.length === 0 || !this.subjectsGrid) return;

        this.navArrows.forEach((arrow, index) => {
            arrow.addEventListener('click', () => {
                const direction = index === 0 ? -1 : 1;
                const scrollAmount = 300;
                this.subjectsGrid.scrollBy({
                    left: scrollAmount * direction,
                    behavior: 'smooth'
                });
            });
        });
    }
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Calculate GPA from grades
function calculateGPA(grades) {
    const gradePoints = {
        'A': 4.0,
        'B': 3.0,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };
    
    const validGrades = grades.filter(g => gradePoints[g] !== undefined);
    if (validGrades.length === 0) return 0;
    
    const totalPoints = validGrades.reduce((sum, grade) => sum + gradePoints[grade], 0);
    return (totalPoints / validGrades.length).toFixed(1);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Get grade color
function getGradeColor(grade) {
    const colors = {
        'A': '#10b981',
        'B': '#7c3aed',
        'C': '#f97316',
        'D': '#ef4444',
        'F': '#991b1b'
    };
    return colors[grade] || '#6b7280';
}

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎓 Exam Results Dashboard initializing...');
    
    // Initialize all managers
    const themeManager = new ThemeManager();
    const sidebarManager = new SidebarManager();
    const tabNavigation = new TabNavigation();
    const dataRenderer = new DataRenderer();
    const searchManager = new SearchManager();
    const scrollNavigation = new ScrollNavigation();

    // Render all data
    dataRenderer.renderAll();

    // Calculate and log stats
    const completedSubjects = subjectsData.filter(s => s.status === 'completed').length;
    const allGrades = subjectsData.filter(s => s.grade !== '-').map(s => s.grade);
    const gpa = calculateGPA(allGrades);
    
    console.log('📊 Stats:');
    console.log('  - Total Subjects:', subjectsData.length);
    console.log('  - Completed:', completedSubjects);
    console.log('  - GPA:', gpa);
    
    console.log('✅ Dashboard loaded successfully!');
    
    // Add smooth transitions after initial load
    setTimeout(() => {
        document.body.style.transition = 'background-color 0.3s, color 0.3s';
    }, 100);
});

// Export for potential use
window.ExamDashboard = {
    subjectsData,
    performanceData,
    calculateGPA,
    formatDate,
    getGradeColor
};
