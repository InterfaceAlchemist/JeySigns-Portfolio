const caption =
  'Instagram is a popular photo and video sharing social networking service owned by meta'

export const argus = {
  title: 'ARGUS COFFEE & TEA',
  tag: 'Selected Works',
  series: 'Social Media Posting - 01',
  layout: 'argus',
  meta: [
    { label: 'Industry', value: 'Coffee Shop' },
    { label: 'Role', value: 'Brand Designer' },
    { label: 'Year', value: '2023-2024' },
  ],
  items: [
    { type: 'frame', image: 'images/graphic/argus-2.webp', handle: 'arguscoffeetea', avatar: 'images/logos/argus.webp', caption: true, alt: 'Argus Coffee & Tea Franchise Now post' },
    { type: 'frame', image: 'images/graphic/argus-1.webp', handle: 'arguscoffeetea', avatar: 'images/logos/argus.webp', caption: true, alt: 'Argus Coffee & Tea "Love at first sip" post' },
    { type: 'card', image: 'images/graphic/argus-cold-coffee.webp', handle: 'arguscoffeetea', alt: 'Argus Coffee & Tea Cold Coffee post' },
    { type: 'card', image: 'images/graphic/argus-kiwi.webp', handle: 'arguscoffeetea', alt: 'Argus Coffee & Tea Kiwi Fruit Tea post' },
    { type: 'card', image: 'images/graphic/argus-matcha.webp', handle: 'arguscoffeetea', alt: 'Argus Coffee & Tea Matcha Latte post' },
    { type: 'card', image: 'images/graphic/argus-red-velvet.webp', handle: 'arguscoffeetea', alt: 'Argus Coffee & Tea Red Velvet Milktea post' },
  ],
}

export const sugarCafe = {
  title: 'Sugar Cafe PH',
  tag: 'Selected Works',
  series: 'Social Media Posting - 02',
  layout: 'sugar',
  meta: [
    { label: 'Industry', value: 'Cafe Shop' },
    { label: 'Role', value: 'Graphic Artist' },
    { label: 'Year', value: '2022-2023' },
  ],
  items: [
    { type: 'card', image: 'images/graphic/sc-iced-americano.webp', alt: 'Sugar Cafe Iced Americano post' },
    { type: 'card', image: 'images/graphic/sc-okinawa.webp', alt: 'Sugar Cafe Okinawa Milk Tea post' },
    { type: 'card', image: 'images/graphic/sc-four-season.webp', alt: 'Sugar Cafe Four Season Fruit Yogurt post' },
    { type: 'frame', image: 'images/graphic/sc-corndogs.webp', handle: 'sugarcafeph', avatar: 'images/misc/sugarcafe-avatar.png', caption: true, captionText: caption, alt: 'Sugar Cafe Corndogs post' },
    { type: 'card', image: 'images/graphic/sc-coffee.webp', alt: 'Sugar Cafe Coffee post' },
    { type: 'card', image: 'images/graphic/sc-milktea.webp', alt: 'Sugar Cafe Milk Tea post' },
    { type: 'card', image: 'images/graphic/sc-strawberry.webp', alt: 'Sugar Cafe Strawberry Fruit Yogurt post' },
  ],
}

// Posters — three rows of seven, exactly as laid out in the Figma.
// `ratio` is only used for row 3 (the shorter row with mixed shapes).
export const posters = {
  rows: [
    [
      { image: 'images/graphic/poster-himeno.webp', alt: 'Chainsaw Man — Himeno poster' },
      { image: 'images/graphic/poster-bakugou.webp', alt: 'My Hero Academia — Bakugou poster' },
      { image: 'images/graphic/poster-momo-ayase.webp', alt: 'Dandadan — Momo Ayase poster' },
      { image: 'images/graphic/poster-gojo.webp', alt: 'Jujutsu Kaisen — Satoru Gojo poster' },
      { image: 'images/graphic/poster-kirara-hoshi.webp', alt: 'Jujutsu Kaisen - Hirara Hoshi Magazine poster' },
      { image: 'images/graphic/poster-pitou.webp', alt: 'Hunter x Hunter — Neferpitou poster' },
      { image: 'images/graphic/poster-shibuya.webp', alt: 'Shibuya Y2K poster' },
    ],
    [
      { image: 'images/graphic/poster-vice-city.webp', alt: 'Karina Seoul City (Vice City) Style poster' },
      { image: 'images/graphic/poster-slam-dunk.webp', alt: 'Yunjin Slam Dunk poster' },
      { image: 'images/graphic/poster-liyo.webp', alt: 'LIYO Film poster' },
      { image: 'images/graphic/poster-infographics.webp', alt: 'Stay Safe and Dry Infographic' },
      { image: 'images/graphic/poster-el-fili.webp', alt: 'El Filibusterismo poster' },
      { image: 'images/graphic/poster-no-stress.webp', alt: 'This and No Stress poster' },
      { image: 'images/graphic/poster-just-be-yourself.webp', alt: 'Just be Yourself poster' },
    ],
    [
      { image: 'images/graphic/poster-congrats.webp', ratio: '1 / 1', alt: 'CLAFRREDN logo contest congratulations post' },
      { image: 'images/graphic/poster-looking-for.webp', ratio: '1 / 1', alt: 'We are looking for — recruitment post' },
      { image: 'images/graphic/poster-mspmc-1.webp', ratio: '109 / 155', alt: 'Ms. PMC 2026 poster 1' },
      { image: 'images/graphic/hoh-tarpaulin.webp', ratio: '195 / 155', alt: 'Hands Of Hope A meal shared today poster' },
      { image: 'images/graphic/poster-mspmc-2.webp', ratio: '109 / 155', alt: 'Ms. PMC 2026 poster' },
      { image: 'images/graphic/poster-handa-ka-na-bang.webp', ratio: '1 / 1', alt: 'Handa ka na bang bumalik? poster' },
      { image: 'images/graphic/poster-cum-laude.webp', ratio: '1 / 1', alt: 'Officially Graduated — cum laude post' },
    ],
  ],
  meta: [
    { label: 'Types', value: 'Personal Design, Commissions, Universities, & Organization' },
    { label: 'Year', value: '2023-2026' },
  ],
}
