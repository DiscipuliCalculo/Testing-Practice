const analyze= require('./functions')

test('Check for proper return', () => {
    expect(analyze([1,8,3,4,2,6])).toEqual({'average': 4, 'min': 1, 'max': 8, 'length': 6});
}) 


test('Check for proper return', () => {
    expect(analyze([4,4,4,4,4,4])).toEqual({'average': 4,'min': 4,'max': 4,'length': 6});
}) 