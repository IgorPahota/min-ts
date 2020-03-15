enum Membership {
    Base,
    Simple,
    Premium
}

const membership = Membership.Base;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FB = 'FB',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.VK;
console.log(social);

const secondSocial: SocialMedia = SocialMedia.FB;
console.log(secondSocial);