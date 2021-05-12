import {
	LinkModel,
	PortModel,
	DefaultLinkModel,
	PortModelAlignment,
} from '@projectstorm/react-diagrams'

export class SensorPortModel extends PortModel {
	constructor(alignment: PortModelAlignment) {
		super({
			type: 'sensor',
			name: alignment,
			alignment: alignment,
		})
	}

	createLinkModel(): LinkModel {
		return new DefaultLinkModel()
	}
}
