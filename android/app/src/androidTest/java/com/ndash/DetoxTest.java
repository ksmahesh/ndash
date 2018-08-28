package com.ndash;

import android.support.test.filters.LargeTest;
import android.support.test.rule.ActivityTestRule;
import android.support.test.runner.AndroidJUnit4;
import android.content.Context;
import android.support.test.InstrumentationRegistry;
import android.webkit.WebSettings;
import static org.mockito.Mockito.*;

import com.wix.detox.Detox;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

/**
 * Created by simonracz on 28/05/2017.
 */

@RunWith(AndroidJUnit4.class)
@LargeTest
public class DetoxTest {

    @Rule
    public ActivityTestRule<MainActivity> mActivityRule = new ActivityTestRule<>(MainActivity.class, false, false);

    @Test
    public void runDetoxTests() throws InterruptedException {
      Context reactContext = InstrumentationRegistry.getTargetContext().getApplicationContext();
      WebSettings webSettings = spy(WebSettings.class);
      doReturn("getDefaultUserAgentMock").when(webSettings).getDefaultUserAgent(reactContext);

      Detox.runTests(mActivityRule);
    }
}
