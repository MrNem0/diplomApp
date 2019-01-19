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
      <Typography variant="h5" component="h5" align="center">
        Ваш результат
      </Typography>
      <Chart
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
