import {
	NodeModel,
	NodeModelGenerics,
	PortModelAlignment,
} from '@projectstorm/react-diagrams'
import { SensorNodeModelGenerics } from './SensorNodeModelGenerics'
import { SensorPortModel } from './SensorPortModel'

interface SensorNodeModelIn {
	id?: string
	name?: string
	sensorType?: number
	warning?: boolean
	danger?: boolean
}

export class SensorNodeModel extends NodeModel<
	NodeModelGenerics & SensorNodeModelGenerics
> {
	id: string
	name: string
	sensorType: number
	warning: boolean
	danger: boolean

	constructor(options: SensorNodeModelIn = {}) {
		super({
			...options,
			type: 'sensor',
		})

		this.id = options.id || ''
		this.name = options.name || ''
		this.sensorType = options.sensorType !== undefined ? options.sensorType : -1
		this.warning = options.warning !== undefined ? options.warning : false
		this.danger = options.danger !== undefined ? options.danger : false

		this.addPort(new SensorPortModel(PortModelAlignment.TOP))
		this.addPort(new SensorPortModel(PortModelAlignment.LEFT))
		// this.addPort(new SensorPortModel(PortModelAlignment.BOTTOM))
		this.addPort(new SensorPortModel(PortModelAlignment.RIGHT))
	}

	serialize() {
		return {
			...super.serialize(),
			id: this.id,
			name: this.name,
			sensorType: this.sensorType,
			warning: this.warning,
			danger: this.danger,
		}
	}

	deserialize(event: any): void {
		super.deserialize(event)
		this.id = event.data.id
		this.name = event.data.name
		this.sensorType = event.data.sensorType
		this.warning = event.data.warning
		this.danger = event.data.danger
	}
}
