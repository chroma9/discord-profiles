let x = window.location.origin;

function generateResults() {
    // Display Name Preview
    if($(`#input__display-name`).val() !== ``) {
        $(`.dprofile__display-name`).text($(`#input__display-name`).val());
    } else {
        $(`.dprofile__display-name`).text(`Your Display Name`);
    }
    
    // Username Preview
    if($(`#input__username`).val() !== ``) {
        $(`.dprofile__username`).text($(`#input__username`).val());
    } else {
        $(`.dprofile__username`).text(`username`);
    }
    
    // Pronouns Preview
    if($(`#input__pronouns`).val() !== ``) {
        $(`.dprofile__pronouns`).text($(`#input__pronouns`).val());
    } else {
        $(`.dprofile__pronouns`).text(`They/Them`);
    }
    
    // Bio Preview
    if($(`#input__bio`).val() !== ``) {
        $(`.dprofile__bio`).text($(`#input__bio`).val());
    } else {
        $(`.dprofile__bio`).text(`Your Bio`);
    }
    
    // Member Since Preview
    if($(`#input__member-since`).val() !== ``) {
        $(`.dprofile__member-since`).text($(`#input__member-since`).val());
    } else {
        $(`.dprofile__member-since`).text(`Jan 1, 1970`);
    }
    
    // Banner Link Preview
    if($(`#input__banner-image`).val() !== ``) {
        var b_link = $(`#input__banner-image`).val();
        $(`.dprofile__banner-image`).attr(`style`, `background-image: url(${b_link})`);
    }
    
    // Avatar Link Preview
    if($(`#input__avatar-image`).val() !== ``) {
        var a_link = $(`#input__avatar-image`).val();
        $(`.dprofile__avatar-image`).attr(`style`, `background-image: url(${a_link})`);
    }
    
    // Primary Color Preview
    $('.dprofile').css('--profile-gradient-primary', $(`#input__cprimary`).val());
    $('.dprofile').css('--profile-gradient-secondary', $(`#input__csecondary`).val());

    // Badge Previews
    $(`.dprofile__badges`).html(``);
    if($(`#badge__discord-staff`).is(`:checked`)) {
        createBadge(`discord-staff`, `Discord Staff`);
    }
    if($(`#badge__partnered-server-owner`).is(`:checked`)) {
        createBadge(`partnered-server-owner`, `Partnered Server Owner`);
    }
    if($(`#badge__moderator-programs-alumni`).is(`:checked`)) {
        createBadge(`moderator-programs-alumni`, `Moderator Programs Alumni`);
    }
    if($(`#badge__hypesquad-events`).is(`:checked`)) {
        createBadge(`hypesquad-events`, `HypeSquad Events`);
    }
    if($(`#badge__hypesquad-bravery`).is(`:checked`)) {
        createBadge(`hypesquad-bravery`, `HypeSquad Bravery`);
    }
    if($(`#badge__hypesquad-brilliance`).is(`:checked`)) {
        createBadge(`hypesquad-brilliance`, `HypeSquad Brilliance`);
    }
    if($(`#badge__hypesquad-balance`).is(`:checked`)) {
        createBadge(`hypesquad-balance`, `HypeSquad Balance`);
    }
    if($(`#badge__bug-hunter-gold`).is(`:checked`)) {
        createBadge(`bug-hunter-gold`, `Bug Hunter`);
    }
    if($(`#badge__bug-hunter`).is(`:checked`)) {
        createBadge(`bug-hunter`, `Bug Hunter`);
    }
    if($(`#badge__active-developer`).is(`:checked`)) {
        createBadge(`active-developer`, `Active Developer`);
    }
    if($(`#badge__early-verified-bot-developer`).is(`:checked`)) {
        createBadge(`early-verified-bot-developer`, `Early Verified Bot Developer`);
    }
    if($(`#badge__server-booster`).is(`:checked`)) {
        let m = $(`#badge__server-booster-months`).val();
        createBadge(`server-booster-${m}`, `Server Booster for ${m} Months`);
    }
    if($(`#badge__early-supporter`).is(`:checked`)) {
        createBadge(`early-supporter`, `Early Supporter`);
    }
    if($(`#badge__discord-nitro`).is(`:checked`)) {
        createBadge(`discord-nitro`, `Discord Nitro`);
    }
    if($(`#badge__originally-known-as`).is(`:checked`)) {
        createBadge(`originally-known-as`, `Originally known as`);
    }
    if($(`#badge__completed-a-quest`).is(`:checked`)) {
        createBadge(`completed-a-quest`, `Completed a Quest`);
    }
    if($(`#badge__supports-commands`).is(`:checked`)) {
        createBadge(`supports-commands`, `Supports Commands`);
    }
    if($(`#badge__uses-automod`).is(`:checked`)) {
        createBadge(`uses-automod`, `Uses Automod`);
    }
    if($(`#badge__server-has-premium`).is(`:checked`)) {
        let u = $(`.dprofile__username`).text();
        createBadge(`server-has-premium`, `This Server has ${u} Premium`);
    }


    // Render the Source Code
    profileCredit = (`<!-- Generated using the Discord Profile Maker by @officialchroma9 -->`);
    profileStylesheet = (`<link rel="stylesheet" href="${x}/assets/css/discord-profile.min.css">`);
    profileRaw = $(`#dprofile__region`).html();
    profileRaw = profileRaw.split(`\n`).join(``);
    profileRaw = profileRaw.split(`  `).join(``);
    finalResults = (`${profileCredit}\n${profileStylesheet}\n${profileRaw}`);
    $(`#code-output`).text(finalResults);
}

function createBadge(imageName, title) {
    let core = (`<img class="dprofile__badge" src="${x}/assets/badges/${imageName}.png" title="${title}">`);
    $('.dprofile__badges').append(core);
}

$('#generate').click(function() {
    generateResults();
});