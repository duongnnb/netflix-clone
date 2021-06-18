import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Browse from '../../pages/browse';
import { FirebaseContext } from '../../context/firebase';
import { JestFakeTimers } from '@jest/fake-timers';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({}),
}));

jest.mock('../../utils', () => ({
  selectionFilter: () => ({
    series: [
      {
        title: 'Documentaries',
        data: [
          {
            id: 'series-1x',
            title: 'Tiger King',
            description:
              'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
            genre: 'documentaries',
            maturity: '18',
            slug: 'tiger-king',
          },
        ],
      },
    ],
    films: [
      {
        title: 'Suspense',
        data: [
          {
            id: 'film-1x',
            title: 'Amanda Knox',
            description:
              'Amanda Marie Knox is an American woman who spent almost four years in an Italian prison.',
            genre: 'documentaries',
            maturity: '12',
            slug: 'amanda-knox',
          },
        ],
      },
    ],
  }),
}));

const firebase = {
  auth: jest.fn(() => ({
    currentUser: {
      displayName: 'Anonymous',
      photoURL: 1,
      email: 'test@mail.com',
    },
    signOut: jest.fn(() => Promise.resolve('I am signed out!')),
  })),
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(() => Promise.resolve('I get content!')),
      add: jest.fn(() => Promise.resolve('I add content!')),
    })),
  })),
};

describe('<Browse />', () => {
  it('renders the browse page with populated data', () => {
    const { container } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Browse />
        </FirebaseContext.Provider>
      </Router>
    );
  });
});
