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

// Task 4: Demonstrate event bubbling with container click logging
const ticketContainer = document.getElementById('ticketContainer');
ticketContainer.addEventListener('click', () => {
    console.log('Ticket container clicked (event bubbling occurred)');
});

// Task 5: Additional Challenge – Inline Editing of Support Tickets

function editTicket(ticket, name, issue, priority) {
    ticket.innerHTML = `
        <input type="text" class="edit-name" value="${name}">
        <input type="text" class="edit-issue" value="${issue}">
        <select class="edit-priority">
            <option value="High" ${priority === 'High' ? 'selected' : ''}>High</option>
            <option value="Medium" ${priority === 'Medium' ? 'selected' : ''}>Medium</option>
            <option value="Low" ${priority === 'Low' ? 'selected' : ''}>Low</option>
        </select>
        <button class="save-btn">Save</button>
    `;

    ticket.querySelector('.save-btn').addEventListener('click', () => {
        const updatedName = ticket.querySelector('.edit-name').value;
        const updatedIssue = ticket.querySelector('.edit-issue').value;
        const updatedPriority = ticket.querySelector('.edit-priority').value;

        // Re-create ticket with updated details
        addTicket(updatedName, updatedIssue, updatedPriority);
        ticket.remove(); // Remove editable version

        // Re-highlight high-priority tickets
        highlightHighPriorityTickets();
    });
}


