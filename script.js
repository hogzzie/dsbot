async function viewMembers() {
    const response = await fetch('https://25368e49-4116-49e2-b0f2-8f1373692808-00-ac4nep1qjdiq.riker.replit.dev/view-members');
    const data = await response.json();
    document.getElementById('output').innerText = JSON.stringify(data, null, 2);
}

async function banMember() {
    const memberId = prompt('Enter the member ID to ban:');
    const response = await fetch('https://25368e49-4116-49e2-b0f2-8f1373692808-00-ac4nep1qjdiq.riker.replit.dev/ban-member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId })
    });
    const data = await response.json();
    document.getElementById('output').innerText = data.message;
}

async function muteMember() {
    const memberId = prompt('Enter the member ID to mute:');
    const response = await fetch('https://25368e49-4116-49e2-b0f2-8f1373692808-00-ac4nep1qjdiq.riker.replit.dev/mute-member', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberId })
    });
    const data = await response.json();
    document.getElementById('output').innerText = data.message;
}

async function writeAnnouncement() {
    const announcement = prompt('Enter your announcement:');
    const response = await fetch('https://25368e49-4116-49e2-b0f2-8f1373692808-00-ac4nep1qjdiq.riker.replit.dev/write-announcement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ announcement })
    });
    const data = await response.json();
    document.getElementById('output').innerText = data.message;
}
