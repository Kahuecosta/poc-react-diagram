import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SensorNodeModel } from './SensorNodeModel'
import {
	DiagramEngine,
	PortModel,
	PortModelAlignment,
	PortModelGenerics,
	PortWidget,
} from '@projectstorm/react-diagrams'
import styled from '@emotion/styled'
import { IconSensor } from '../Icons/IconSensor'

export interface SensorNodeWidgetProps {
	node: SensorNodeModel
	engine: DiagramEngine
	size: number
}

const renderStyle = (props: SensorNodeWidgetProps) => {
	// props.node.isSelected()

	const Port = styled.div`
		width: 10px;
		height: 10px;
		z-index: 10;
		border-radius: 50%;
		cursor: pointer;
	`

	const Node = styled.div`
		position: 'relative';
		margin: -3px 0 0 -3px;
		width: ${props.size - 6}px;
		height: ${props.size - 6}px;
		border-radius: 50%;
		border: 3px solid transparent;
		cursor: pointer;
		background: rgba(0, 0, 0, 0.04);

		transition: background 0.2s ease, border 0.2s ease;

		&:hover {
			background: rgba(0, 0, 0, 0.08);
			border-color: rgba(0, 0, 0, 0.1);

			.port div {
				background: rgba(0, 0, 0, 0.2);
			}
		}
	`

	const Danger = styled.div`
		position: absolute;
		z-index: 11;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.05);
		width: 22px;
		height: 20px;
		top: -4px;
		left: -5px;
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
		transform: scale(1);
		animation: pulse 2s infinite;

		.fa-exclamation-triangle {
			position: absolute;
			font-size: 12px;
			top: 3px;
			left: 4px;
			color: #ab0202;
		}
	`

	const Warning = styled.div`
		position: absolute;
		z-index: 11;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.05);
		width: 22px;
		height: 20px;
		top: -4px;
		left: -5px;
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
		transform: scale(1);
		animation: pulse 2s infinite;

		.fa-exclamation-triangle {
			position: absolute;
			font-size: 12px;
			top: 3px;
			left: 4px;
			color: #ec6d00ed;
		}
	`

	const Title = styled.span`
		font-size: 0.4rem;
		width: calc(100% - 3px);
		text-align: center;
		display: inline-block;
		position: absolute;
		left: 0;
		bottom: -10px;
		color: #000;
	`

	return {
		S: {
			Title,
			Node,
			Port,
			Danger,
			Warning,
		},
	}
}

export class SensorNodeWidget extends React.Component<SensorNodeWidgetProps> {
	render() {
		const { size, node, engine } = this.props

		const { S } = renderStyle(this.props)

		const portLeft = node.getPort(PortModelAlignment.LEFT)
		const portRight = node.getPort(PortModelAlignment.RIGHT)
		const portTop = node.getPort(PortModelAlignment.TOP)

		const styleLeft = {
			top: size / 2 - 8,
			left: -12,
			position: 'absolute',
		}

		const styleTop = {
			left: size / 2 - 8,
			top: -12,
			position: 'absolute',
		}

		const styleRight = {
			left: size - 4,
			top: size / 2 - 8,
			position: 'absolute',
		}

		const renderPort = (
			port: PortModel<PortModelGenerics> | null,
			style: any
		) => {
			if (!port) return

			return (
				<PortWidget style={style} port={port} engine={engine}>
					<S.Port />
				</PortWidget>
			)
		}

		return (
			<S.Node>
				{node.warning && (
					<S.Warning>
						<FontAwesomeIcon icon={['fas', 'exclamation-triangle']} />
					</S.Warning>
				)}
				{node.danger && (
					<S.Danger>
						<FontAwesomeIcon icon={['fas', 'exclamation-triangle']} />
					</S.Danger>
				)}
				<IconSensor sensorType={node.sensorType}></IconSensor>
				<S.Title>{node.name}</S.Title>
				{renderPort(portLeft, styleLeft)}
				{renderPort(portTop, styleTop)}
				{renderPort(portRight, styleRight)}
			</S.Node>
		)
	}
}
