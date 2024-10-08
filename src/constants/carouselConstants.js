const commonResponsiveSettings = (breakpoints) =>
  breakpoints.map(({ breakpoint, slidesToShow }) => ({
    breakpoint,
    settings: {
      slidesToShow,
      swipeToSlide: true,
      arrows: false,
      swipe: true,
    },
  }));

const donationBreakpoints = [
  { breakpoint: 1199, slidesToShow: 3.7 },
  { breakpoint: 1120, slidesToShow: 3.5 },
  { breakpoint: 1070, slidesToShow: 3.3 },
  { breakpoint: 978, slidesToShow: 3.1 },
  { breakpoint: 930, slidesToShow: 3 },
  { breakpoint: 910, slidesToShow: 2.7 },
  { breakpoint: 830, slidesToShow: 2.4 },
  { breakpoint: 767, slidesToShow: 4.2 },
  { breakpoint: 738, slidesToShow: 3.5 },
  { breakpoint: 640, slidesToShow: 3.1 },
  { breakpoint: 550, slidesToShow: 2.7 },
  { breakpoint: 500, slidesToShow: 2.2 },
  { breakpoint: 400, slidesToShow: 2.05 },
];

export const donationsSettings = {
  slidesToShow: 4,
  swipeToSlide: true,
  responsive: commonResponsiveSettings(donationBreakpoints),
};

const interestIdolsBreakpoints = [
  { breakpoint: 1199, slidesToShow: 5.05 },
  { breakpoint: 767, slidesToShow: 6 },
  { breakpoint: 560, slidesToShow: 5.1 },
  { breakpoint: 500, slidesToShow: 3.12 },
];

export const interestIdolsSettings = {
  slidesToShow: 10.02,
  swipeToSlide: true,
  arrows: false,
  swipe: true,
  responsive: commonResponsiveSettings(interestIdolsBreakpoints),
};

export const addIdolsSettings = {
  speed: 500,
  rows: 2,
  Infinite: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        swipe: true,
      },
    },
  ],
};
