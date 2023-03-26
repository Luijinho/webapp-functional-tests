const assert = chai.assert;

describe('Test app',function() {
    const incr    = hackedDoc.getElementById('incr');
    const reset   = hackedDoc.getElementById('reset');
    const display = hackedDoc.getElementById('display');

    it('display starts with 0',function(done) {
        assert.equal(0 , display.innerHTML);
        done();
    });
    it('click incr and display changes to 1',function(done) {
        incr.click();
        assert.equal(1 , display.innerHTML);
        done();
    });
    it('click incr again and display changes to 2',function(done) {
        incr.click();
        assert.equal(2 , display.innerHTML);
        done();
    });
    it('click reset and display reverts to 0',function(done) {
        reset.click();
        assert.equal(0 , display.innerHTML);
        done();
    });
});
