// The amount of points in the path:
var points = 25;

// The distance between the points:
var length = 35;

var path = new Path({
	strokeColor: '#000000',
	strokeWidth: 20,
	strokeCap: 'round'
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
	}
	path.smooth({ type: 'continuous' });
}

function onMouseDown(event) {
	path.fullySelected = true;
	var clrMap = path.strokeColor;
	clrMap['red'] += 0.1;
	clrMap['blue'] += 0.1;
	clrMap['green'] += 0.1;
	if (clrMap['red'] >= 1.0) {
		clrMap['red'] = 0.0;
		clrMap['blue'] = 0.0;
		clrMap['green'] = 0.0;
	}
	path.strokeColor = clrMap;
}

function onMouseUp(event) {
	path.fullySelected = false;
}