@RestController
@RequestMapping("/api/agent")
public class FlaskBridgeController {

    @Value("${flask.base-url}")
    private String flaskBaseUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/hello")
    public ResponseEntity<String> forwardToFlask() {
        String flaskUrl = flaskBaseUrl + "/agent/hello";
        String response = restTemplate.getForObject(flaskUrl, String.class);
        return ResponseEntity.ok("Spring → Flask 응답: " + response);
    }
}
