const TaskList =
[
    {
        title: 'Develop Mini App Task Manager',
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
        label: 'Study JavaScript Udemy',
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
                value: 'Access the udemy course for JavaScript, and watch all the video.',
            },
        ]
    }
]

const StringPutTemplate =
[
    {label: 'Task Name:', model: 'taskName', type: 'text'},
]

const RadioPutTemplate =
[
    {label: 'Yes:', name: 'priorityOption', model: 'inputPriority', type: 'radio', value: 'Yes'},
    {label: 'No:', name: 'priorityOption', model: 'inputPriority', type: 'radio', value: 'No'},
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
    StringPutTemplate,
    RadioPutTemplate,
    NullModel
}