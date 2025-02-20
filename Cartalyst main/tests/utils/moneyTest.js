import {formatCurrency} from '../../scripts/utils/money.js';

describe("Test suite: Format Currency", () =>{
  it("convert cents to dollars", () =>{
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it("works with zero", ()=> {
    expect(formatCurrency(0)).toEqual('0.00')
  });

  it("rounds up price to the nearest cents", ()=> {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  }) 

  it("rounds down to the nearest cents",() => {
    expect(formatCurrency(2000.4)).toEqual('20.00')
  })

  it("works with a negative number", () => {
    expect(formatCurrency(-200)).toEqual('-2.00')
  })
}) 