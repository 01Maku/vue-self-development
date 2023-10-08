const TaskList =
[
    {
        title: 'Develop Mini App Task Manager',
        classPriority: 'non-priority',
        classState: 'pending',
        model: 'taskName',
        taskData: 
        [
            {
                model: 'inputState',
                label: 'Complete',
                value: false,
            },
            {
                model: 'inputPriority',
                label: 'Task Priority',
                value: false,
            },
            {
                model: 'inputDescription',
                label: 'Description',
                value: 'Using Vue, Base Environment, and Javascripts, create a page and challenge yourself with Task Management System.',
            },
        ]
    },
    {
        title: 'Develop BMI Calculator',
        classPriority: 'non-priority',
        classState: 'pending',
        model: 'taskName',
        taskData: 
        [
            {
                model: 'inputState',
                label: 'Complete',
                value: false,
            },
            {
                model: 'inputPriority',
                label: 'Task Priority',
                value: false,
            },
            {
                model: 'inputDescription',
                label: 'Description',
                value: 'Using Vue, Base Environment, and Javascripts, create a page and challenge yourself with BMI Calculator System.',
            },
        ]
    },
    {
        title: 'Study JavaScript Udemy',
        classPriority: 'priority',
        classState: 'complete',
        model: 'taskName',
        taskData: 
        [
            {
                model: 'inputState',
                label: 'Complete',
                value: true,
            },
            {
                model: 'inputPriority',
                label: 'Task Priority',
                value: true,
            },
            {
                model: 'inputDescription',
                label: 'Description',
                value: 'Access the udemy course for JavaScript, and watch all the video.',
            },
        ]
    },
]

const TaskTemplate =
{
    title: null,
    classPriority: 'non-priority',
    classState: 'pending',
    model: 'taskName',
    taskData: 
    [
        {
            model: 'inputState',
            label: 'Complete',
            value: false,
        },
        {
            model: 'inputPriority',
            label: 'Task Priority',
            value: null,
        },
        {
            model: 'inputDescription',
            label: 'Description',
            value: null,
        },
    ]
}

const StringPutTemplate =
[
    {label: 'Task Name:', model: 'taskName', type: 'text'},
]

const RadioPutTemplate =
[
    {label: 'Yes:', name: 'priorityOption', model: 'inputPriority', type: 'radio', value: true},
    {label: 'No:', name: 'priorityOption', model: 'inputPriority', type: 'radio', value: false},
]

const NullModel =
{
    taskName: '',
    inputState: '',
    inputPriority: '',
    inputDescription: '',
}
export
{
    TaskList,
    TaskTemplate,
    StringPutTemplate,
    RadioPutTemplate,
    NullModel
}