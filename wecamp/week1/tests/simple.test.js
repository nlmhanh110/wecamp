// Note: Sut means System Under Test,
// which saves us from having to give it a unique name each time
import { add } from '../src/simple';
import { addThreeNumbers } from '../src/simple';

// First check the happy path - the normal inputs expected to get an output

describe('the Add function', () => {

  test('Adding 0 and 0 should equal 0', () => {
    expect(add(0, 0)).toEqual(0);
  });

  test('Adding 0 and 1 should equal 1', () => {
    expect(add(0, 1)).toEqual(1);
  });

  test('Adding 1 and 1 should equal 2', () => {
    expect(add(1, 1)).toEqual(2);
  });

  test('Adding 1000 and 1000 should equal 2000', () => {
    expect(add(1000, 1000)).toEqual(2000);
  });

  // Now check the sad path - both extreme and strange inputs and what output they should give

  test('Adding 100000000000000000 and 100000000000000000 should equal 200000000000000000', () => {
    expect(add(100000000000000000, 100000000000000000)).toEqual(200000000000000000);
  });

  test('Adding false and false should equal false', () => {
    expect(add(false, false)).toEqual(false);
  });

  test('Adding null and null should equal false', () => {
    expect(add(null, null)).toEqual(false);
  });

  test('Adding undefined and undefined should equal false', () => {
    expect(add(undefined, undefined)).toEqual(false);
  });

  test('Adding NaN and NaN should equal false', () => {
    expect(add(NaN, NaN)).toEqual(false);
  });

})

describe('the Add Three Numbers function', ()=>{
  //happy path

  test ('Adding 0 and 0 and 0 should equal 0',()=>{
    expect(addThreeNumbers(0,0,0)).toEqual(0);
  })

  test ('Adding 10000 and 0 and 0 should equal 10000',()=>{
    expect(addThreeNumbers(10000,0,0)).toEqual(10000);
  })

  test ('Adding 10000 and 5000 and 0 should equal 15000',()=>{
    expect(addThreeNumbers(10000,5000,0)).toEqual(15000);
  })

  test ('Adding 10000 and 5000 and 200 should equal 15200',()=>{
    expect(addThreeNumbers(10000,5000,200)).toEqual(15200);
  })

  test ('Adding -3 and -5 and -10 should equal -18',()=>{
    expect(addThreeNumbers(-3,-5,-10)).toEqual(-18);
  })

  test ('Adding 100.56 and 10.78 and 5.22 should equal 116.56',()=>{
    expect(addThreeNumbers(100.56,10.78,5.22)).toEqual(116.56);
  })
  
  test ('Adding -100.56 and -10.78 and -5.22 should equal -116.56',()=>{
    expect(addThreeNumbers(-100.56,-10.78,-5.22)).toEqual(-116.56);
  })

  test ('Adding 100.56 and -10.78 and -5.22 should equal 84.56',()=>{
    expect(addThreeNumbers(100.56,-10.78,-5.22)).toEqual(84.56);
  })

  //sad path
  test ('Adding 100000000000000000 and 100000000000000000 and 100000000000000000 should equal 300000000000000000',()=>{
    expect(addThreeNumbers(100000000000000000,100000000000000000,100000000000000000)).toEqual(300000000000000000);
  })

  test ('Adding 999999999999998 and 100000000000000000 and 100000000000000000 should equal 200999999999999998',()=>{
    expect(addThreeNumbers(999999999999998,100000000000000000,100000000000000000)).toEqual(200999999999999998);
  })

  test ('Adding 1000 and 0 and null should equal false',()=>{
    expect(addThreeNumbers(1000,0,null)).toEqual(false);
  })
  
  test ('Adding 1000 and 0 and false should equal false',()=>{
    expect(addThreeNumbers(1000,0,false)).toEqual(false);
  })

  test ('Adding 1000 and "a" and 0 should equal false',()=>{
    expect(addThreeNumbers(1000,"a",0)).toEqual(false);
  })

  test ('Adding 1000 and "10" and 0 should equal false',()=>{
    expect(addThreeNumbers(1000,"10",0)).toEqual(false);
  })

  test ('Adding undefined and 0 and 500 should equal false',()=>{
    expect(addThreeNumbers(undefined,0,500)).toEqual(false);
  })

  test ('Adding NaN and 0 and 500 should equal false',()=>{
    expect(addThreeNumbers(NaN,0,500)).toEqual(false);
  })
})