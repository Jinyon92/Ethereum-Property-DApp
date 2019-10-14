let RealEstate = artifacts.require("./RealEstate.sol");

contract('RealEstate', function(accounts) {
    let realEstateInstance;

    it("컨트랙의 소유자 초기화 테스팅", function() {
        return RealEstate.deployed().then(function(instance) {
            realEstateInstance = instance;
            return realEstateInstance.owner.call();
        }).then(function(owner) {
            assert.equal(owner.toUpperCase(), accounts[0].toUpperCase(), "owner가 가나슈 첫번째 계정과 동일하지 않습니다.");
        });
    });
});