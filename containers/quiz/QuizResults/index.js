import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const QuizResult = () => (
  <Card>
    <CardContent>
      <Typography variant="h4" align="center">
        Тест Завершен
      </Typography>
      <Button>Home</Button>
    </CardContent>
  </Card>
);

export default QuizResult;
