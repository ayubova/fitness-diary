const workoutPlan = [
    {
        day: 'Вторник',
        title: 'Ноги и низ спины',
        exercises: [
            {
                name: 'Сгибания ног лежа в тренажере',
                repeat: '4*20',
                weight: '15',
                comment: '',
            },
            {
                name: 'Приседания в Смите с шир. постановкой ног',
                repeat: '4*15',
                weight: '20',
                comment: '',
            },
            {
                name: 'Мертвая тяга штангой',
                repeat: '4*15',
                weight: '20-30',
                comment: 'суперсет с разведением ног',
            },
            {
                name: 'Разведение ног в тренажере пружинкой',
                repeat: '4*20',
                weight: '25',
                comment: 'суперсет с мертвой тягой',
            },
            {
                name: 'Выпад назад с гантелями',
                repeat: '4*15',
                weight: '2*5',
                comment: '',
            },
            {
                name: 'Жим на плечи сидя',
                repeat: '3*15',
                weight: '2*5',
                comment: '',
            },
        ],
    },
    {
        day: 'Четверг',
        title: 'Верх спины и руки',
        exercises: [
            {
                name: 'Тяга верхнего блока к груди',
                repeat: '4*15',
                weight: '20',
                comment: '',
            },
            {
                name: 'Тяга к поясу сидя',
                repeat: '4*15',
                weight: '20',
                comment: '',
            },
            {
                name: 'Тяга штанги стоя в наклоне',
                repeat: '4*15',
                weight: '20',
                comment: '',
            },
            {
                name: 'Тяга гантелей в наклоне к поясу',
                repeat: '4*15',
                weight: '2*5',
                comment: '',
            },
            {
                name: 'Разгибание рук на блоке',
                repeat: '4*15',
                weight: '15',
                comment: '',
            },
        ],
    },
    {
        day: 'Суббота',
        title: 'Функциональная',
        exercises: [
            {
                name: 'Эллипс',
                repeat: '5*10 мин',
                weight: '',
                comment: 'в быстром темпе',
            },
            {
                name: 'Выпрыгивания из приседов',
                repeat: '5*20',
                weight: '',
                comment: 'суперсет с эллипсом',
            },
            {
                name: 'Планка',
                repeat: '2*1 мин',
                weight: '',
                comment: '',
            },
        ],
    },
];

export default workoutPlan;
