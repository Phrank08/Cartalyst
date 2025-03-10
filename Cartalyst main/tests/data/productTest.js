import {Product, Clothing, Appliance} from '../../data/products.js';
import {formatCurrency} from '../../scripts/utils/money.js'

describe("Test suite: Product Class", () => {
  let product1;

  beforeEach(() => {
    product1 = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });

    

  });


  it("has correct properties and methods", () => {
    expect(product1.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(product1.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
    expect(product1.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
    expect(product1.rating).toEqual({
      stars: 4.5,
      count: 87
    });
    expect(product1.priceCents).toEqual(1090);

  })

  it("gets the star URL", () => {
    expect(product1.getStarsUrl()).toEqual('images/ratings/rating-45.png')
  })

  it("gets the price", () => {
    expect(product1.getPrice()).toEqual(`$${formatCurrency(product1.priceCents)}`)
  })

  it("does not return any extra info", () => {
    expect(product1.extraInfoHTML()).toEqual('')
  })
})

describe("Test suite: Clothing Class", () => {
    let clothing;
    

    beforeEach(() => {
      clothing = new Clothing({
        id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
        image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name: "Adults Plain Cotton T-Shirt - 2 Pack",
        rating: {
          stars: 4.5,
          count: 56
        },
        priceCents: 799,
        keywords: [
          "tshirts",
          "apparel",
          "mens"
        ],
        type: "clothing",
        sizeChartLink: "images/clothing-size-chart.png"
      });
  
      
  
    });
  
    it("has correct properties and methods", () => {
      expect(clothing.id).toEqual("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
      expect(clothing.image).toEqual("images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg");
      expect(clothing.name).toEqual("Adults Plain Cotton T-Shirt - 2 Pack");
      expect(clothing.rating).toEqual({
        stars: 4.5,
        count: 56
      });
      expect(clothing.priceCents).toEqual(799);
  
    })
  
    it("gets the star URL", () => {
      expect(clothing.getStarsUrl()).toEqual('images/ratings/rating-45.png')
    })
  
    it("gets the price", () => {
      expect(clothing.getPrice()).toEqual(`$${formatCurrency(clothing.priceCents)}`)
    })
  
    it("returns clothing size chart", () => {
      expect(clothing.extraInfoHTML()).toContain(`<a href="images/clothing-size-chart.png" target="_blank">`)
    })
})

describe("Test suite: Appliance Class", () => {
  let appliance;
    

  beforeEach(() => {
    appliance = new Appliance({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliance",
      warrantyLink: "images/appliance-warranty.png" ,
      instructionLink: "images/appliance-instructions.png" 
    });

    

  });

  it("has correct properties and methods", () => {
    expect(appliance.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
    expect(appliance.image).toEqual("images/products/black-2-slot-toaster.jpg");
    expect(appliance.name).toEqual("2 Slot Toaster - Black");
    expect(appliance.rating).toEqual({
      stars: 5,
      count: 2197
    });
    expect(appliance.priceCents).toEqual(1899);

  })

  it("gets the star URL", () => {
    expect(appliance.getStarsUrl()).toEqual('images/ratings/rating-50.png')
  })

  it("gets the price", () => {
    expect(appliance.getPrice()).toEqual(`$${formatCurrency(appliance.priceCents)}`)
  })

  it("returns appliance instruction warranty", () => {
    expect(appliance.extraInfoHTML()).toContain(`<a href="images/appliance-warranty.png" target="_blank">`)
  })
})