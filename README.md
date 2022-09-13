# ML Flow

A visual playground to build Neural Networks. This playground provides you with widgets which represent different Neural Network modules like Convolution layer, BatchNorm layers etc.

## Features
* You can drag and drop these widgets around and build custom, complex architectures with ease.
* Implement custom modules to monitor the data flow like intermediate data representation, plotting features of intermediate conv layers
* Write custom modules to suit your purpose
* Export your architecture to your desired format (pytorch, tensorflow, etc.)
* Import community made architectures directly into your workflow
* Write custom modules to load your datasets 
* Write custom modules for different loss functions

## TODO
- [ ] Add all modules supported by the mainstream frameworks (PyTorch, Tensorflow)
- [ ] Add a widget box as a sidebar to drag and drop widgets
- [ ] Add a panel to right side to change the properties of the particular widgets
- [ ] Add resizable feature to widgets using __react-movable__
- [ ] Add code editing box to write custom flow with code intellisense
- [ ] Create a desktop application to enable, custom dataset loading modules, training modules, and to deploy modules

## Modules List
> The module / widget names will be similar to naming of the pytorch framework (since that's the framework I am more familiar with)

| Module Name | Widget Name | Status |
| ----------- | ----------- | ------ |
| Linear | Linear | |  
| Convolution 2d | Conv2d | |
| Convolution 3d | Conv3d | |
| Batch Normalisation | BatchNorm2d | |
| Sequential | Sequential | |
| Custom Module | Custom | |

## Contribution

Contribution of any kind is appreciated. :)