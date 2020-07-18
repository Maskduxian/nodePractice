//const assert=require("assert");
const { add , mul,cover}=require("../src/math");
const { should, expect, assert } =require("chai");
// if(add(2,3)===5){
//     console.log("add(2,3)===50k")
// }else{
//     console.log('error')
// }
//assert.strictEqual(add(2,3),5)
//chai
// should();
// add(2,3).should.equal(5);
// expect(add(2,3)).to.be(5);

//mocha
describe('#math',()=>{
    describe('add',()=>{
       it('should return 5 when 2+3 ',()=>{
           expect(add(2,3),5)
       })
       it('should return 5 when 2+3 ',()=>{
        expect(add(2,-3),-1)
    })
    });
    describe('mul',()=>{
        it('should return 6 when 2*3 ',()=>{
            expect(add(2,3),6)
        })
    })
    describe('cover',()=>{
        it('should return 6 when a>b *3 ',()=>{
            expect(cover(2,1)).to.equal(1)
        })
        it('should return 6 when a==b *3 ',()=>{
            expect(cover(2,2)).to.equal(4)
        })
        it('should return 6 when b>a *3 ',()=>{
            expect(cover(1,2)).to.equal(3)
        })
    }) 
})