Data and Variables
    - Text
    - number
        - float32
        - float64
        - int8
        etc.
    - Select
    - Multi select
        - multi select dropdown
        - array input
    - Checkbox
    - Select
    - Dict input
        - dynamic variable and names
    
Every variable has a name and its corresponding value

## Example

```json
{
    "variables": {
        "in_features": {
            "type": "input",
            "data_type": "number",
            "default_value": 0,
        },
        "out_features": {
            "type": "input",
            "data_type": "number",
            "default_value": 0,
        },
        "bias": {
            "type": "checkbox",
            "data_type": "boolean",
            "default_value": true,
        },
        "device": {

        },
        "dtype": {
            "type": "input",
            "data_type": "string",
            "default_value": "",
        }
    }
}
```
