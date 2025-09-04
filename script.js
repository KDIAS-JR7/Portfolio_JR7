const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const viewProjectsBtn = document.getElementById('view-projects-btn');
const skillsGrid = document.getElementById('skills-grid');
const skillDescriptionBox = document.getElementById('skill-description');
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('a[href^="#"]'); // This is the corrected line.

const skillDescriptions = {
    'ccna': {
        title: 'CCNA Certification',
        description: 'The Cisco Certified Network Associate (CCNA) certification validates my foundational knowledge in networking, including network fundamentals, IP connectivity, and security basics. This is the cornerstone of my professional skills.'
    },
    'cisco-ios': {
        title: 'Cisco IOS',
        description: 'I have hands-on experience configuring and managing routers and switches using the Cisco IOS command-line interface. I\'m proficient in setting up and troubleshooting network devices in virtual environments like Cisco Packet Tracer.'
    },
    'ospf': {
        title: 'OSPF',
        description: 'My expertise includes configuring and verifying the OSPF (Open Shortest Path First) routing protocol. I can implement single and multi-area OSPF topologies to ensure efficient and scalable network routing.'
    },
    'vlans-stp': {
        title: 'VLANs & STP',
        description: 'I am skilled in creating and managing VLANs (Virtual Local Area Networks) to segment network traffic and improve performance. I also understand and can configure STP (Spanning Tree Protocol) to prevent network loops.'
    },
    'packet-tracer': {
        title: 'Cisco Packet Tracer',
        description: 'I use Cisco Packet Tracer extensively to simulate and design complex network topologies. This tool has been crucial for my hands-on practice, allowing me to test configurations and troubleshoot issues in a virtual lab environment.'
    },
    'network-automation': {
        title: 'Network Automation',
        description: 'I am building my skills in Python to automate common network tasks. This includes writing scripts to manage configurations, perform health checks, and gather data, which saves time and reduces human error.'
    },
    'linux-cli': {
        title: 'Linux CLI',
        description: 'I am a Linux enthusiast with a strong command of the command-line interface. I use the CLI for network troubleshooting, system administration, and scripting, which is essential for working with network devices and servers.'
    },
    'ip-subnetting': {
        title: 'IP Subnetting & Addressing',
        description: 'I have a strong command of IP addressing and subnetting. I can efficiently design and implement IP addressing schemes to optimize network performance, manage network growth, and conserve address space for both IPv4 and IPv6.'
    },
    'python': {
        title: 'Python',
        description: 'I have foundational knowledge of Python and am applying it to network automation. I can write scripts to interact with network devices and automate routine tasks, which helps improve efficiency and scalability.'
    },
    'java': {
        title: 'Java',
        description: 'I am currently learning Java, building on my understanding of object-oriented programming. I have a basic grasp of syntax and structure and am working on projects to deepen my practical application of the language.'
    },
    'html': {
        title: 'HTML',
        description: 'I have foundational knowledge of HTML and can create the structure and content of web pages. I am comfortable with basic elements and tags, laying the groundwork for web development projects.'
    },
    'css': {
        title: 'CSS',
        description: 'I have a basic understanding of CSS for styling and formatting web pages. I can use selectors and properties to control layout, colors, and typography, giving a basic design to the HTML structure.'
    },
    'bootstrap': {
        title: 'Bootstrap',
        description: 'I have a working knowledge of Bootstrap, a popular CSS framework, and can use its components and grid system to quickly build and style responsive web pages. This allows me to create basic but functional user interfaces.'
    },
    'mysql': {
        title: 'MySQL',
        description: 'I have foundational knowledge of MySQL for database management. I can write basic queries to interact with databases and have an understanding of designing simple schemas for web-based projects.'
    },
    'bash': {
        title: 'Bash',
        description: 'I have foundational knowledge of Bash, the standard command-line shell for Linux. This skill is critical for automating tasks, managing the file system, and interacting with the network from the command line.'
    }
};

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

const showSectionAndScroll = (targetId) => {
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('animate-fade-in-up');
    });

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        // Trigger reflow to restart animation
        void targetSection.offsetWidth;
        targetSection.classList.add('animate-fade-in-up');
        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
            behavior: 'smooth'
        });
    }
};

window.addEventListener('load', () => {
    showSectionAndScroll('#home');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showSectionAndScroll(e.target.getAttribute('href'));
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

viewProjectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showSectionAndScroll(e.target.getAttribute('href'));
});

skillsGrid.addEventListener('click', (e) => {
    const skillCard = e.target.closest('button');
    if (skillCard) {
        const skillName = skillCard.dataset.skill;
        if (skillDescriptions[skillName]) {
            const { title, description } = skillDescriptions[skillName];
            skillDescriptionBox.innerHTML = `
                <h3 class="text-2xl font-semibold mb-2 text-[#b4befe]">${title}</h3>
                <p class="text-[#cdd6f4] text-lg">${description}</p>
            `;
            skillDescriptionBox.classList.remove('hidden');
        } else {
            skillDescriptionBox.classList.add('hidden');
        }
    }
});
