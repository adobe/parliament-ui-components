import Header from './Header';
import Footer from './Footer';
import Feedback from './Feedback';
import Nav from './Nav';
import { stripManifestPath } from './ManifestUtils';

describe('Header', () => {
  it('is truthy', () => {
    expect(Header).toBeTruthy()
  })
})

describe('Footer', () => {
  it('is truthy', () => {
    expect(Footer).toBeTruthy()
  })
})

describe('Feedback', () => {
  it('is truthy', () => {
    expect(Feedback).toBeTruthy()
  })
})

describe('Nav', () => {
  it('is truthy', () => {
    expect(Nav).toBeTruthy()
  })
})

describe('stripManifestPath', () => {
  it('is truthy', () => {
    expect(stripManifestPath).toBeTruthy()
  })
  it('empty to return empty', () => {
    expect(stripManifestPath('', { org: 'fake', name: 'path' })).toEqual('')
  })
  it('lower case to work', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md', {
        org: 'adobedocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('upper case to work', () => {
    expect(
      stripManifestPath('AdobeDocs/adobeio-events/master/using.md', {
        org: 'AdobeDocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('mixed case to work', () => {
    expect(
      stripManifestPath('AdobeDocs/adobeio-events/master/using.md', {
        org: 'adobedocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('reversed mixed case to work', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md', {
        org: 'AdobeDocs',
        name: 'adobeio-events',
        branch: 'master'
      })
    ).toEqual('/using.md')
  })
  it('no url prefix to leave path unchanged', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md', {})
    ).toEqual('adobedocs/adobeio-events/master/using.md')
  })
  it('undefined url prefix to leave path unchanged', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md')
    ).toEqual('adobedocs/adobeio-events/master/using.md')
  })
  it('only repo name is in manifest path all options', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        org: 'adobe',
        name: 'stock-api-docs',
        branch: 'master'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
  it('only repo name is in manifest path missing org', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        name: 'stock-api-docs',
        branch: 'master'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
  it('only repo name is in manifest path missing branch', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        org: 'adobe',
        name: 'stock-api-docs'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
  it('only repo name is in manifest path missing org and branch', () => {
    expect(
      stripManifestPath('stock-api-docs/docs/01-getting-started.md', {
        name: 'stock-api-docs'
      })
    ).toEqual('/docs/01-getting-started.md')
  })
})
