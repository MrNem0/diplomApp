import React from 'react';
import { object } from 'prop-types';
import Link from 'next/link';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import Chart from 'react-google-charts';

const QuizResult = ({ results }) => (
  <Card>
    <CardContent>
      <Typography variant="headline" component="h5" align="center">
        Ваш результат
      </Typography>
      <Typography variant="subtitle1" align="center">
        Ви набрали: {results.correct}
      </Typography>
      <Chart
        style={{ marginLeft: '30px' }}
        width="500px"
        height="300px"
        chartType="PieChart"
        loader={<CircularProgress />}
        data={[
          ['Tests', 'Goals'],
          ['Correct', results.correct],
          ['Incorrect', results.incorrect]
        ]}
        options={{
          legend: 'none',
          pieSliceText: 'labels',
          pieStartAngle: 100
        }}
        rootProps={{ 'data-testid': '4' }}
      />
      <Divider />
      <Chart
        width="600px"
        height="300px"
        chartType="ColumnChart"
        loader={<CircularProgress />}
        data={[
          ['Tests', 'Goals', { role: 'style' }],
          ['MAX', 100, 'color: blue'],
          ['Correct', results.correct, 'color: green'],
          ['MIN', 40, 'color: red']
        ]}
        options={{
          legend: 'none'
        }}
        rootProps={{ 'data-testid': '4' }}
      />
      <Divider />
      <Typography variant='headline' align="center">
        Наші рекомендації
      </Typography>
      <Typography variant='subtitle1' gutterBottom paragraph>
          Грунтуючись на ваших результатах представлених раніше, ми могли б сказати,
        що ви виконуєте майже всі процеси в ті області якій працюєтею.
          Ми рекомендуємо процес поліпшення із застосуванняи аналізу та підставі
        результатів встановити нові цілі щодо вдосканалення процесів.
        <ul>
          <li>Визначити всі зони робочих продуктів</li>
          <li>Спец знання (напр. Оцінювачі, планувальники), обладнання</li>
          <li>Планування бюджету, обладнання, програмнного забепечення та людських ресурсів, коли ваші проекти
          починаються і документувати ці дані
          </li>
          <li>Поліпшення процесів для RSKM - "Управління ризиками" області процесу</li>
          <li>Розробка планів щодо зниження ризику тільки для найважливіших ризиків проекту. Включни
          параметри обробки і список для виявлених ризиків
          </li>
          <li>Створення організаційної політики для визначення статегії управління ризиками та виявлення
          аналізу та знижиння ризиків
          </li>
        </ul>
      </Typography>
      <Divider />
      <Link href="/">
        <Button fullWidth>Home</Button>
      </Link>
    </CardContent>
  </Card>
);

QuizResult.propTypes = {
  results: object.isRequired
};

export default QuizResult;
