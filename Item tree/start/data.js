//data
module.exports = [ 
	{
		ID: 1493822251930,
		_type: "handler",
		value: "Сделал кофе"
	},
	{
		ID: 1493822251940,
		_type: "interval",
		value : 1
	},
	{
		_type: "group",
		ID: 1493822251950,
		value: "Пошел в магазин",
		nodes: [
			{
				ID: 1493822251970,
				_type: "handler",
				value: "Купил сигарет"
			},
			{
				ID: 1493822251980,
				_type: "handler",
				value: "Купил бухла"
			},
			{    
				ID: 1493822251990,
				_type: "group",
				value: "Ушел с магазина",
				nodes: [
					{
						ID: 1493822288880,
						_type: "handler",
						value: "Ограблен"
					}
				]
			}
		]
	}
]
//data