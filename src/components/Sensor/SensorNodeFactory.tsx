import { SensorNodeWidget } from './SensorNodeWidget'
import { SensorNodeModel } from './SensorNodeModel'
import * as React from 'react'
import { AbstractReactFactory } from '@projectstorm/react-canvas-core'
import { DiagramEngine } from '@projectstorm/react-diagrams-core'

export class SensorNodeFactory extends AbstractReactFactory<
	SensorNodeModel,
	DiagramEngine
> {
	constructor() {
		super('sensor')
	}

	generateReactWidget(event: { model: SensorNodeModel }): JSX.Element {
		return (
			<SensorNodeWidget engine={this.engine} size={50} node={event.model} />
		)
	}

	generateModel(_event: any) {
		return new SensorNodeModel()
	}
}
