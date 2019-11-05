import Header from './Header'
import Footer from './Footer'
import Feedback from './Feedback'
import Nav from './Nav'
import { stripManifestPath } from './ManifestUtils'

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
    expect(stripManifestPath('', 'fake/path')).toEqual('')
  })
  it('lower case to work', () => {
    expect(
      stripManifestPath(
        'adobedocs/adobeio-events/master/using.md',
        'adobedocs/adobeio-events/master'
      )
    ).toEqual('/using.md')
  })
  it('upper case to work', () => {
    expect(
      stripManifestPath(
        'AdobeDocs/adobeio-events/master/using.md',
        'AdobeDocs/adobeio-events/master'
      )
    ).toEqual('/using.md')
  })
  it('mixed case to work', () => {
    expect(
      stripManifestPath(
        'AdobeDocs/adobeio-events/master/using.md',
        'adobedocs/adobeio-events/master'
      )
    ).toEqual('/using.md')
  })
  it('reversed mixed case to work', () => {
    expect(
      stripManifestPath(
        'adobedocs/adobeio-events/master/using.md',
        'AdobeDocs/adobeio-events/master'
      )
    ).toEqual('/using.md')
  })
  it('no url prefix to leave path unchanged', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md', '')
    ).toEqual('adobedocs/adobeio-events/master/using.md')
  })
  it('undefined url prefix to leave path unchanged', () => {
    expect(
      stripManifestPath('adobedocs/adobeio-events/master/using.md')
    ).toEqual('adobedocs/adobeio-events/master/using.md')
  })
})
