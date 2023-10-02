const inputTemplate =
[
    {label: 'Name', type: 'text', model: 'inputName'},
    {label: 'Height (cm)', type: 'number', model: 'inputHeight'},
    {label: 'Weight (kg)', type: 'number', model: 'inputWeight'},
]

const dataCluster =
[
    {cluster: 'dataFlag1', label: 'Name', type: 'text', model: 'inputName', value: ''},
    {cluster: 'dataFlag1', label: 'Height (cm)', type: 'number', model: 'inputHeight', value: ''},
    {cluster: 'dataFlag1', label: 'Weight (kg)', type: 'number', model: 'inputWeight', value: ''},
    {cluster: 'dataFlag2', label: 'Name', type: 'text', model: 'inputName', value: ''},
    {cluster: 'dataFlag2', label: 'Height (cm)', type: 'number', model: 'inputHeight', value: ''},
    {cluster: 'dataFlag2', label: 'Weight (kg)', type: 'number', model: 'inputWeight', value: ''},
]

const buttonTemplate =
[
    {label: 'Calculate'},
    {label: 'Compare'},
]

const nullModel =
{
    inputName: '',
    inputHeight: '',
    inputWeight: '',
}

export
{
    inputTemplate,
    buttonTemplate,
    nullModel,
    dataCluster
}