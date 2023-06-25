// import dayjs from 'dayjs';
// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {
// /  AgendaList,
//   CalendarProvider,
//   ExpandableCalendar,
// } from 'react-native-calendars';
// import {DayCard} from '../components/DayCard';

// const HomeScreen = () => {
//   const now = dayjs().format('YYYY-MM-DD');
//   console.log('date', now);
//   // function onCalendarDayPress(event: any) {
//   //   console.log('calendar day pressed', event);
//   // }
//   // const list = [
//   //   {
//   //     data: 'ggwp',
//   //   },
//   //   {
//   //     data: 'nigma',
//   //   },
//   //   {
//   //     data: 'eg',
//   //   },
//   // ];
//   // function renderList({item}: any) {
//   //   return <DayCard item={item} />;
//   // }
//   return (
//     <View style={style.container}>
//       <CalendarProvider date={now} showTodayButton={true}>
//         <ExpandableCalendar closeOnDayPress={true} />
//         {/* <AgendaList sections={list} renderItem={renderList} /> */}
//       </CalendarProvider>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#444444',
//   },
//   text: {
//     color: '#ffffff',
//   },
// });
// export default HomeScreen;
