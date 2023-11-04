import { Redirect, Stack, useRouter } from "expo-router";
import {
	Button,
	Pressable,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	StyleSheet,
} from "react-native";
import { Card, Avatar, Icon } from "@rneui/themed";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import styles from "app/styles";
import volunteeringData from "assets/server/events.json";

const Events = () => {
	// Dummy items
	const router = useRouter();
	const volunteering = volunteeringData;

	const handleCardClick = (eventid: number) => {
		// Handle card click
		// router.push(`/eventspage/${eventid}`);
		router.push({ pathname: `/eventspage`, params: { eventid: eventid } });
	};

	return (
		<View style={{ flex: 1 }}>
			<View style={styles.header}>
				<Text style={styles.headerText}>
					Volunteer opportunities near New York, NY
				</Text>
			</View>
			<ScrollView>
				{volunteering.map((event, eventid) => (
					<TouchableOpacity
						key={eventid}
						onPress={() => handleCardClick(event.eventid)}
					>
						<Card containerStyle={styles.card} key={eventid}>
							<Card.Image
								source={{ uri: event.image }}
								style={styles.card.image}
							>
								<LinearGradient
									colors={["transparent", "rgba(0,0,0,0.5)", "black"]}
									style={{ ...styles.gradient }}
								></LinearGradient>
								<View style={styles.pointsContainer}>
									<Text style={styles.pointsText}>⭐ {event.points}</Text>
								</View>

								<Card.Title style={styles.title}>{event.title}</Card.Title>
								<Card.FeaturedSubtitle style={styles.subtitle}>
									{event.location}
								</Card.FeaturedSubtitle>
							</Card.Image>
						</Card>
					</TouchableOpacity>
				))}
			</ScrollView>
		</View>
	);
};

export default Events;
