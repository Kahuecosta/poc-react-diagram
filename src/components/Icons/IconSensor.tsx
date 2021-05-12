import * as React from 'react'
import { SensorTypes } from '../../common/constants'
import { IconBomba } from './IconBomba'
import { IconRosca } from './IconRosca'
import { IconTanque } from './IconTanque'

type Props = {
	sensorType: number
}

const getIcon = (sensorType: number): JSX.Element => {
	switch (sensorType) {
		case SensorTypes.BOMBA:
			return <IconBomba></IconBomba>
		case SensorTypes.TANQUE:
			return <IconTanque></IconTanque>
		case SensorTypes.ROSCA:
			return <IconRosca></IconRosca>
		default:
			return <></>
	}
}

export const IconSensor = (props: Props) => {
	return getIcon(props.sensorType)
}
