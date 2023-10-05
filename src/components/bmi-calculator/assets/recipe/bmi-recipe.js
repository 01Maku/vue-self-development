const inputTemplate =
[
    {step:"0.01", label: 'Name', type: 'text', model: 'inputName'},
    {step:"0.01", label: 'Height (m)', type: 'number', model: 'inputHeight'},
    {step:"0.01", label: 'Weight (kg)', type: 'number', model: 'inputWeight'},
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

const nullModel =
{
    inputName: '',
    inputHeight: '',
    inputWeight: '',
}

const bmiValidator =
[
    {min: 16, max:18.4, type: 'Underweight'},
    {min: 18.5, max:24.9, type: 'Normal'},
    {min: 25, max:29.9, type: 'Overweight'},
    {min: 30, max:34.9, type: 'Moderately Obese'},
    {min: 35, max:39.9, type: 'Severely Obese'},
]

export
{
    inputTemplate,
    nullModel,
    dataCluster,
    bmiValidator
}