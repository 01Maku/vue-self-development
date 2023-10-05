export
{
    friendList,
    friendTemplate,
    newFriendStruct
}   

const friendTemplate =
{
    id: 0,
    category1: 'Introduction',
    intro:
    [
        {type: 'text', var: 'varNickname', label: 'Nickname', value: 'none'},
        {type: 'text', var: 'varFname', label: 'Fullname', value: 'none'},
        {type: 'text', var: 'varBday', label: 'Birthday', value: 'none'},
        {type: 'text', var: 'varGender', label: 'Gender', value: 'none'}
    ],
    category2: 'Introduction',
    more:
    [
        {type: 'text', var: 'varSign', label: 'Sign', value: 'none'},
        {type: 'text', var: 'varColor', label: 'Fave Color', value: 'none'},
        {type: 'text', var: 'varFood', label: 'Fave Food', value: 'none'}
    ]
}

const newFriendStruct =
{
    id: 0,
    nickname: 'none',
    intro: 
    [
        {label: 'Fullname', value: 'none'},
        {label: 'Birthday', value: 'none'},
        {label: 'Gender', value: 'none'}
    ],
    more:
    [
        {label: 'Sign', value: 'none'},
        {label: 'Fave Color', value: 'none'},
        {label: 'Fave Food', value: 'none'}
    ]
}

const friendList = 
[
    //  index 0
    {
        id: 1,
        nickname: 'Maks',
        intro: 
        [
            {label: 'Fullname', value: 'Maks Makusu'},
            {label: 'Birthday', value: 'Wednesday'},
            {label: 'Gender', value: 'Penguin'}
        ],
        more:
        [
            {label: 'Sign', value: 'No Entry'},
            {label: 'Fave Color', value: 'Something Colorful'},
            {label: 'Fave Food', value: 'As long as Edible'}
        ],
    },
    //  index 1
    {
        id: 2,
        nickname: 'Purring',
        intro: 
        [
            {label: 'Fullname', value: 'Purring Makusu'},
            {label: 'Birthday', value: 'Last Week'},
            {label: 'Gender', value: 'Goodest boi'}
        ],
        more:
        [
            {label: 'Sign', value: 'Beware of dog'},
            {label: 'Fave Color', value: 'Yellow Pudding Cake'},
            {label: 'Fave Food', value: 'Only Chicken'}
        ],
    }
]