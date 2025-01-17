import webpack from 'webpack';

import sassLoaderConfig from './sass-loader-example/webpack.config';
import tsLoaderConfig from './ts-loader-example/webpack.config';
import lessLoaderConfig from './less-loader-example/webpack.config';

test("Processes sass-loader's @import correctly", (done) => {
  const config = sassLoaderConfig({});

  webpack(config, (err, stats) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    expect(err).toBe(null);

    if (stats.hasErrors()) {
      // eslint-disable-next-line no-console
      console.error(stats.toJson().errors);
    }
    expect(stats.hasErrors()).toBe(false);
    done();
  });
}, 30000);

test('Processes ts-loader correctly', (done) => {
  const config = tsLoaderConfig({});

  webpack(config, (err, stats) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    expect(err).toBe(null);

    if (stats.hasErrors()) {
      // eslint-disable-next-line no-console
      console.error(stats.toJson().errors);
    }
    expect(stats.hasErrors()).toBe(false);
    done();
  });
}, 30000);

test('Processes less-loader correctly', (done) => {
  const config = lessLoaderConfig({});

  webpack(config, (err, stats) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }

    expect(err).toBe(null);

    if (stats.hasErrors()) {
      // eslint-disable-next-line no-console
      console.error(stats.toJson().errors);
    }
    expect(stats.hasErrors()).toBe(false);
    done();
  });
}, 30000);
