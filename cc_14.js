// Task 2: Adding Support Tickets Dynamically
function addTicket(name, issue, priority) {
    const container = document.getElementById('ticketContainer');

    // Create a new div for the ticket
    const ticket = document.createElement('div');
    ticket.className = `ticket ${priority.toLowerCase()}`;

    // Add customer name
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;

    // Add issue description
    const issueParagraph = document.createElement('p');
    issueParagraph.textContent = issue;

    // Priority indicator
    const priorityLabel = document.createElement('span');
    priorityLabel.textContent = `Priority: ${priority}`;

    // Resolve button to remove ticket
    const resolveButton = document.createElement('button');
    resolveButton.className = 'resolve-btn';
    resolveButton.textContent = 'Resolve';

    // Assemble the ticket elements
    ticket.appendChild(nameHeading);
    ticket.appendChild(issueParagraph);
    ticket.appendChild(priorityLabel);
    ticket.appendChild(resolveButton);

    // Attach the ticket to the container
    container.appendChild(ticket);

   
    resolveButton.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event bubbling
        container.removeChild(ticket);
    });

   
    ticket.addEventListener('dblclick', () => editTicket(ticket, name, issue, priority));
}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightHighPriorityTickets() {
    const highPriorityTickets = Array.from(document.querySelectorAll('.ticket.high'));

    highPriorityTickets.forEach(ticket => {
        ticket.style.border = '2px solid red';
        ticket.style.backgroundColor = '#ffe6e6';
    });
}