import Mock from 'mockjs';
let Random = Mock.Random
Mock.mock('/carousellist', {
    'list|4': [{
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
        ]
    }]
});
Mock.mock('/booklist', {
    'list|6': [{
        'title|1': [
            Random.ctitle(3),
            Random.ctitle(4),
            Random.ctitle(4),
            Random.ctitle(5),
            Random.ctitle(5)
        ],
        'anthor|1': [
            Random.ctitle(3),
            Random.ctitle(2),
            Random.ctitle(3),
            Random.ctitle(3),
            Random.ctitle(3)
        ],
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ]
    }],
    'title': Random.ctitle(4),
    'url': '/'
});
Mock.mock('/overlist', {
    'list|4': [{
        'title|+1': [
            Random.ctitle(3),
            Random.ctitle(4),
            Random.ctitle(4),
            Random.ctitle(5)
        ],
        'anthor|+1': [
            Random.ctitle(3),
            Random.ctitle(2),
            Random.ctitle(3),
            Random.ctitle(3)
        ],
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ],
        'introduce': Random.ctitle(70)
    }],
    'title': '完本推荐',
    'url': '/'
});
Mock.mock('/booklist1', {
    'list|6': [{
        'title|1': [
            Random.ctitle(3),
            Random.ctitle(4),
            Random.ctitle(4),
            Random.ctitle(5),
            Random.ctitle(5)
        ],
        'anthor|1': [
            Random.ctitle(3),
            Random.ctitle(2),
            Random.ctitle(3),
            Random.ctitle(3),
            Random.ctitle(3)
        ],
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ]
    }],
    'title': Random.ctitle(4),
    'url': '/'
});
Mock.mock('/ranking1', {
    'list|10': [{
        'title|1': [
            Random.ctitle(3),
            Random.ctitle(4),
            Random.ctitle(4),
            Random.ctitle(5),
            Random.ctitle(5)
        ],
        'anthor|1': [
            Random.ctitle(3),
            Random.ctitle(2),
            Random.ctitle(3),
            Random.ctitle(3),
            Random.ctitle(3)
        ],
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ]
    }]
});
Mock.mock('/ranking2', {
    'list|10': [{
        'title|1': [
            Random.ctitle(3),
            Random.ctitle(4),
            Random.ctitle(4),
            Random.ctitle(5),
            Random.ctitle(5)
        ],
        'anthor|1': [
            Random.ctitle(3),
            Random.ctitle(2),
            Random.ctitle(3),
            Random.ctitle(3),
            Random.ctitle(3)
        ],
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ]
    }]
});
Mock.mock('/ranking3', {
    'list|10': [{
        'title|1': [
            Random.ctitle(3),
            Random.ctitle(4),
            Random.ctitle(4),
            Random.ctitle(5),
            Random.ctitle(5)
        ],
        'anthor|1': [
            Random.ctitle(3),
            Random.ctitle(2),
            Random.ctitle(3),
            Random.ctitle(3),
            Random.ctitle(3)
        ],
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ]
    }]
});
Mock.mock('/ranking4', {
    'list|10': [{
        'title|1': [
            Random.ctitle(3),
            Random.ctitle(4),
            Random.ctitle(4),
            Random.ctitle(5),
            Random.ctitle(5)
        ],
        'anthor|1': [
            Random.ctitle(3),
            Random.ctitle(2),
            Random.ctitle(3),
            Random.ctitle(3),
            Random.ctitle(3)
        ],
        'pic|+1': [
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color()),
            Random.dataImage('300x200', Random.color())
        ]
    }]
});