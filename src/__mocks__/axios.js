const mockResponse = {
  data: {
    results: [
      {
        productId: 1,
        productName: "SRP",
        shortDesc: "Short Desc",
        detaileDesc: "Deatiled desc",
        category: "Painting",
        startingBid: 700,
        bidEndDate: "2022-12-01",
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
