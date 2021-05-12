import * as React from 'react'
import createEngine, {
	DefaultPortModel,
	DiagramEngine,
	DiagramModel,
	DiagramModelGenerics,
	PortModelAlignment,
} from '@projectstorm/react-diagrams'
import { CanvasWidget } from '@projectstorm/react-canvas-core'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import { SensorNodeFactory } from './Sensor/SensorNodeFactory'
import { SensorPortModel } from './Sensor/SensorPortModel'
import { SensorPortFactory } from './Sensor/SensorPortFactory'
import { SensorNodeModel } from './Sensor/SensorNodeModel'
import { DiagramCanvasWidget } from './DiagramCanvasWidget'
import { SensorTypes } from '../common/constants'

interface createSensorIn {
	node: SensorNodeModel
	model: DiagramModel<DiagramModelGenerics>
	portL: DefaultPortModel | null
	portR: DefaultPortModel | null
	portT: DefaultPortModel | null
}

interface DiagramProps {}

interface DiagramState {
	engine: DiagramEngine
	model: DiagramModel<DiagramModelGenerics>
}

class DiagramComponent extends React.Component<DiagramProps, DiagramState> {
	constructor(props: DiagramProps) {
		super(props)

		const { engine, model } = this.loadEngineModel()

		this.state = {
			engine: engine,
			model: model,
		}

		this.onReload = this.onReload.bind(this)
		this.onSave = this.onSave.bind(this)
		this.onUpdatePosition = this.onUpdatePosition.bind(this)
		this.onToggleBlock = this.onToggleBlock.bind(this)
		this.onReset = this.onReset.bind(this)
	}

	loadEngineModel() {
		const engine = createEngine()

		const registerFactory = new SensorPortFactory(
			'sensor',
			() => new SensorPortModel(PortModelAlignment.LEFT)
		)

		engine.getPortFactories().registerFactory(registerFactory)

		engine.getNodeFactories().registerFactory(new SensorNodeFactory())

		const model = new DiagramModel()

		engine.setModel(model)

		return {
			engine,
			model,
		}
	}

	loadInit() {
		this.loadEngineModel()

		const bomba1 = new SensorNodeModel({
			id: 'b0',
			name: 'Bomba 1',
			sensorType: SensorTypes.BOMBA,
		})

		const bomba3 = new SensorNodeModel({
			id: 'b1',
			name: 'Bomba 2',
			sensorType: SensorTypes.BOMBA,
		})

		const bomba2 = new SensorNodeModel({
			id: 'b2',
			name: 'Bomba 3',
			sensorType: SensorTypes.BOMBA,
		})

		const tanque1 = new SensorNodeModel({
			id: 't0',
			name: 'Ácido',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque2 = new SensorNodeModel({
			id: 't1',
			name: 'Fungicida',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque3 = new SensorNodeModel({
			id: 't2',
			name: 'Conservante',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque4 = new SensorNodeModel({
			id: 't3',
			name: 'Conservante',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque5 = new SensorNodeModel({
			id: 't4',
			name: 'Antioxidante',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque6 = new SensorNodeModel({
			id: 't5',
			name: 'Fungicida',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque7 = new SensorNodeModel({
			id: 't6',
			name: 'Ácido',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque8 = new SensorNodeModel({
			id: 't7',
			name: 'Antioxidante',
			sensorType: SensorTypes.TANQUE,
		})

		const tanque9 = new SensorNodeModel({
			id: 't8',
			name: 'Conservante',
			sensorType: SensorTypes.TANQUE,
		})

		const rosca1 = new SensorNodeModel({
			id: 'r1',
			name: 'Misturador 1',
			sensorType: SensorTypes.ROSCA,
		})

		const rosca2 = new SensorNodeModel({
			id: 'r2',
			name: 'Misturador 2',
			sensorType: SensorTypes.ROSCA,
		})

		const rosca3 = new SensorNodeModel({
			id: 'r3',
			name: 'Misturador 1',
			sensorType: SensorTypes.ROSCA,
		})

		tanque1.setPosition(100, 100)
		tanque2.setPosition(200, 100)
		tanque3.setPosition(300, 100)
		tanque4.setPosition(400, 100)
		tanque5.setPosition(500, 100)
		tanque6.setPosition(600, 100)
		tanque7.setPosition(700, 100)
		tanque8.setPosition(800, 100)
		tanque9.setPosition(900, 100)
		bomba1.setPosition(100, 200)
		bomba2.setPosition(200, 200)
		bomba3.setPosition(300, 200)
		rosca1.setPosition(100, 300)
		rosca2.setPosition(200, 300)
		rosca3.setPosition(300, 300)

		this.sensorConfigure({
			node: bomba1,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: bomba2,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: bomba3,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque1,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque2,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque3,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque4,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque5,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque6,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque7,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque8,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: tanque9,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: rosca1,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: rosca2,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		this.sensorConfigure({
			node: rosca3,
			model: this.state.model,
			portL: null,
			portR: null,
			portT: null,
		})

		// add the models to the root graph
		this.state.model.addAll(
			bomba1,
			bomba2,
			bomba3,
			tanque1,
			tanque2,
			tanque3,
			tanque4,
			tanque5,
			tanque6,
			tanque7,
			tanque8,
			tanque9,
			rosca1,
			rosca2,
			rosca3
		)

		// load model into engine
		this.state.engine.setModel(this.state.model)
	}

	sensorConfigure(data: createSensorIn) {
		const { node, model, portL, portT, portR } = data

		const nodePortL = node.getPort(PortModelAlignment.LEFT)
		const nodePortR = node.getPort(PortModelAlignment.RIGHT)
		const nodePortT = node.getPort(PortModelAlignment.TOP)

		if (nodePortL && portL) model.addLink(portL.link(nodePortL))

		if (nodePortR && portR) model.addLink(portR.link(nodePortR))

		if (nodePortT && portT) model.addLink(portT.link(nodePortT))
	}

	loadSerialized(serialized: string) {
		this.loadEngineModel()

		this.state.model.deserializeModel(JSON.parse(serialized), this.state.engine)

		this.state.engine.setModel(this.state.model)
	}

	loadBlock() {
		const isBlocked = window.localStorage.getItem('diagram-blocked')

		this.state.model.setLocked(isBlocked === 'Y')
	}

	onUpdatePosition() {
		const { engine } = this.state

		const model = engine.getModel()

		const nodes = model.getNodes()

		nodes.forEach(node => {
			if (node.getID() === 'b1') {
				const nodeData: any = node.serialize()

				nodeData.data = {
					id: node.getID(),
					x: node.getX(),
					y: node.getY(),
					name: nodeData.name,
					sensorType: nodeData.sensorType,
					danger: true,
				}

				node.deserialize(nodeData)

				engine.repaintCanvas()
			}

			if (node.getID() === 't3') {
				const nodeData: any = node.serialize()

				nodeData.data = {
					id: node.getID(),
					x: node.getX(),
					y: node.getY(),
					name: nodeData.name,
					sensorType: nodeData.sensorType,
					warning: true,
				}

				node.deserialize(nodeData)

				engine.repaintCanvas()
			}
		})
	}

	onSave() {
		const str = JSON.stringify(this.state.model.serialize())

		window.localStorage.setItem('diagram', str)
	}

	onReload() {
		const serialized = window.localStorage.getItem('diagram')

		if (serialized) {
			this.loadSerialized(serialized)
		} else {
			this.loadInit()
		}

		this.loadBlock()
	}

	onToggleBlock() {
		let isBlocked = window.localStorage.getItem('diagram-blocked')

		isBlocked = isBlocked === 'Y' ? 'N' : 'Y'

		this.state.model.setLocked(isBlocked === 'Y')

		window.localStorage.setItem('diagram-blocked', isBlocked)
	}

	onReset() {
		window.localStorage.removeItem('diagram')
		window.localStorage.removeItem('diagram-blocked')
		window.location.reload()
	}

	render() {
		this.onReload()

		return (
			<>
				<Grid container spacing={3}>
					<Grid item>
						<Button
							variant="text"
							size="small"
							color="secondary"
							onClick={this.onSave}>
							Salvar
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={this.onReload}>
							Carregar
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={this.onUpdatePosition}>
							Atualizar
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={this.onReset}>
							Limpar
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant="text"
							size="small"
							color="primary"
							onClick={this.onToggleBlock}>
							Bloquear/Desbloquear
						</Button>
					</Grid>
				</Grid>

				<DiagramCanvasWidget>
					<CanvasWidget engine={this.state.engine} />
				</DiagramCanvasWidget>
			</>
		)
	}
}

export { DiagramComponent }
