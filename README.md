# VMO audio normalizer

Audio normalizer for voice.mozilla.org. See [this issue](https://github.com/mozilla/voice-web/issues/1498).

### How do I know it is enabled?

Go to the [listen](https://voice.mozilla.org/en/listen) page and open the web console via ctrl+shift+K. If everything works alright, there should be a message like "Normalizing audio item <item>" when the listen site is loaded, and if playback starts, a message like "Playing with gain value <number>". If you don't see these messages, please contact me eg by filing a GitHub issue.

### Using it locally

See [this](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing) link.

### Publishing

```
cd extension
zip -r -FS ../extension.zip *
```
