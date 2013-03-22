var cela = it;

describe('Jquery specification', function () {
	// it('should append a p in the body', function () {
	// 	loadFixtures('fixtures/p.html');
	// 	expect($('<p>')).toExist();
	// });

	it('should set a placeholder to an input', function () {
		setFixtures(
'<p>Hello Theodo</p>'+
'<form action="">'+
'<input type="text" id="toto"/>'+
'</form>');
		var placeholder = new Placeholder($('#toto'), $('p'));
		expect(placeholder.$input.val()).toEqual($('p').text());
	});

// 	cela('devrait spaille un truc', function () {
// 		foo = {
// 			setBar: function (value) {
// 				this.bar = value;
// 			},
// 			getBar: function () {
// 				return this.bar;
// 			}
// 		}

// 		spyOn(foo, 'setBar');
// 		//spyOn(foo, 'getBar').andReturn('foo');
// 		spyOn(foo, 'getBar').andCallFake(function () { return 'foo'; });

// 		foo.setBar('bar');

// 		expect(foo.setBar).toHaveBeenCalled();
// 		expect(foo.getBar()).toEqual('foo');
// 	});

	it('devrait creer un objet spaille', function () {
		var foo = jasmine.createSpyObj('foo', ['setBar', 'getBar']);

		foo.setBar('bar');
		foo.getBar.andCallFake(function () { return 'plop'; });

		expect(foo.setBar).toBeDefined();
		expect(foo.getBar()).toEqual('plop');
	});
});